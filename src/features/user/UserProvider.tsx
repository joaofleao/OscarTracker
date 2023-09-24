import React from 'react'
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'

import UserContext, { type UserContextType } from './UserContext'
import { useApp } from '@features/app'
import { db } from '@services/firebase'
import type { PreferencesType, UserType } from '@types'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const usersCollection = collection(db, 'users')
  const { hasInternet } = useApp()

  const [isLogged, setIsLogged] = React.useState<boolean>(false)

  const [uid, setUid] = React.useState('')

  const [user, setUser] = React.useState<UserType>({
    email: '',
    phoneNumber: '',
    photoURL: '',
    displayName: '',
    emailVerified: false,
    nickName: '',
    movies: [],
    onboarding: true,
    uid: '',
    preferences: {
      poster: false,
      cast: false,
      plot: false,
      ratings: false,
    },
  })

  const updateUser = async (
    _email?: string,
    _displayName?: string,
    _nickName?: string,
    _preferences?: PreferencesType,
    _onboarding?: boolean,
  ): Promise<void> => {
    if (!hasInternet) return
    const userRef = doc(usersCollection, uid)

    const values = {
      ...(_email != null && { email: _email }),
      ...(_displayName != null && { displayName: _displayName }),
      ...(_nickName != null && { nickName: _nickName }),
      ...(_preferences != null && { preferences: _preferences }),
      ...(_onboarding != null && { onboarding: _onboarding }),
    }

    const promise = updateDoc(userRef, values).catch((err) => {
      return console.log(err)
    })

    promise.then(
      function fulfilledReaction(value) {
        console.log({ value })
      },
      function rejectedReaction(error) {
        console.log({ error })
        throw error
      },
    )
  }

  const setMovieUnwatched = async (movie: string): Promise<void> => {
    if (!hasInternet) return
    const userRef = doc(usersCollection, uid)

    updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  const setMovieWatched = async (movie: string): Promise<void> => {
    if (!hasInternet) return
    const userRef = doc(usersCollection, uid)

    updateDoc(userRef, {
      movies: arrayUnion(movie),
    })
  }

  const value: UserContextType = {
    preferences: user.preferences,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    nickName: user.nickName,
    movies: user.movies,
    onboarding: user.onboarding,

    setUser,

    uid,
    setUid,

    isLogged,
    setIsLogged,

    updateUser,
    setMovieUnwatched,
    setMovieWatched,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
