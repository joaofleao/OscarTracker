import React from 'react'
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'

import UserContext, { type UserContextType } from './UserContext'
import { db } from '@services/firebase'
import type { PreferencesType, UserType } from '@types'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const usersCollection = collection(db, 'users')

  const [isLogged, setIsLogged] = React.useState<boolean>(false)

  const [uid, setUid] = React.useState('')
  const [adminSettings, setAdminSettings] = React.useState(false)

  const [user, setUser] = React.useState<UserType>({
    admin: false,
    email: '',
    phoneNumber: '',
    photoURL: '',
    displayName: '',
    emailVerified: false,
    nickname: '',
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
    _nickname?: string,
    _preferences?: PreferencesType,
    _onboarding?: boolean,
  ): Promise<void> => {
    const userRef = doc(usersCollection, uid)

    const values = {
      ...(_email != null && { email: _email }),
      ...(_displayName != null && { displayName: _displayName }),
      ...(_nickname != null && { nickname: _nickname }),
      ...(_preferences != null && { preferences: _preferences }),
      ...(_onboarding != null && { onboarding: _onboarding }),
    }

    updateDoc(userRef, values)
  }

  const setMovieUnwatched = async (movie: string): Promise<void> => {
    const userRef = doc(usersCollection, uid)

    updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  const setMovieWatched = async (movie: string): Promise<void> => {
    const userRef = doc(usersCollection, uid)

    updateDoc(userRef, {
      movies: arrayUnion(movie),
    })
  }

  const value: UserContextType = {
    adminSettings,
    setAdminSettings,

    admin: user.admin,
    preferences: user.preferences,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    nickname: user.nickname,
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
