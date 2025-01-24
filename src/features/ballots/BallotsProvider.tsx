import React from 'react'
import { collection, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'

import BallotsContext, { type BallotsContextType } from './BallotsContext'
import { BetsType, WishesType } from './types'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { db } from '@services/firebase'

const BallotsProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const { user, isLogged } = useUser()
  const edition = useEdition()

  const [bets, setBets] = React.useState<BetsType>()
  const [wishes, setWishes] = React.useState<WishesType>()

  const usersCollection = collection(db, 'users')

  const allPoints = React.useMemo(() => {
    const _points: { [key: string]: number } = {}

    Object.entries(edition.winners || []).forEach((winner) => {
      if (bets?.[winner[0]]?.first === winner[1]) {
        _points[winner[0]] = 100
      }
      if (bets?.[winner[0]]?.second === winner[1]) {
        _points[winner[0]] = 50
      }
    })
    return _points
  }, [bets, edition.winners])

  const points = Object.values(allPoints).reduce((acc, cur) => {
    return acc + cur
  }, 0)

  React.useEffect(() => {
    // if (!isLogged) return
    // const userRef = doc(usersCollection, user.uid)
    // const ballotsCollection = collection(userRef, 'ballots')
    // const ballotsRef = doc(ballotsCollection, edition.editionId)
    // const unsubscribeBallots = onSnapshot(ballotsRef, (snap) => {
    //   const response = snap.data()
    //   if (response) {
    //     setBets(response.bets)
    //     setWishes(response.wishes)
    //   }
    // })
    // return () => {
    //   unsubscribeBallots()
    // }
  }, [isLogged])

  const vote: BallotsContextType['vote'] = (_category, _bets, _wishes) => {
    if (!isLogged) return
    const userRef = doc(usersCollection, user.uid)
    const ballotsCollection = collection(userRef, 'ballots')
    const ballotsRef = doc(ballotsCollection, edition.editionId)

    const finalBets = {
      first: _bets.first ?? '',
      second: _bets.second ?? '',
    }
    const finalWishes = _wishes ?? []

    const object = {
      ['bets.' + _category]: finalBets,
      ['wishes.' + _category]: finalWishes,
    }

    updateDoc(ballotsRef, object).catch(() => {
      setDoc(ballotsRef, {
        bets: {},
        wishes: {},
      }).then(() => {
        updateDoc(ballotsRef, object)
      })
    })
  }

  const value: BallotsContextType = {
    vote,
    bets,
    wishes,
    points,
  }

  return <BallotsContext.Provider value={value}>{children}</BallotsContext.Provider>
}

export default BallotsProvider
