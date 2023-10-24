import React from 'react'
import { collection, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'

import BallotsContext, { type BallotsContextType } from './BallotsContext'
import { BetsType, WishesType } from './types'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { db } from '@services/firebase'

const BallotsProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const user = useUser()
  const edition = useEdition()

  const [bets, setBets] = React.useState<BetsType>()
  const [wishes, setWishes] = React.useState<WishesType>()

  const usersCollection = collection(db, 'users')

  React.useEffect(() => {
    if (user.isLogged) {
      const userRef = doc(usersCollection, user.uid)
      const ballotsCollection = collection(userRef, 'ballots')
      const ballotsRef = doc(ballotsCollection, edition.editionId)

      const unsubscribeBallots = onSnapshot(ballotsRef, (snap) => {
        const response = snap.data()
        if (response) {
          setBets(response.bets)
          setWishes(response.wishes)
        }
      })

      return () => {
        unsubscribeBallots()
      }
    }
  }, [user.isLogged])

  const vote: BallotsContextType['vote'] = (_category, _bets, _wishes) => {
    const userRef = doc(usersCollection, user.uid)
    const ballotsCollection = collection(userRef, 'ballots')
    const ballotsRef = doc(ballotsCollection, edition.editionId)

    const object = {
      ['bets.' + _category]: _bets,
      ['wishes.' + _category]: _wishes,
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
  }

  return <BallotsContext.Provider value={value}>{children}</BallotsContext.Provider>
}

export default BallotsProvider
