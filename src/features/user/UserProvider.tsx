import React from 'react'
import { arrayRemove, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'

import UserContext, { type UserContextType } from './UserContext'
import { db } from '@services/firebase'
import type { UserType } from '@types'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [isLogged, setIsLogged] = React.useState<UserContextType['isLogged']>(false)
  const [uid, setUid] = React.useState<UserContextType['uid']>('')
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

  const usersCollection = collection(db, 'users')

  const updateUser: UserContextType['updateUser'] = (
    _email?,
    _displayName?,
    _nickname?,
    _preferences?,
    _onboarding?,
  ) => {
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

  const setMovieUnwatched: UserContextType['setMovieUnwatched'] = (movie) => {
    const userRef = doc(usersCollection, uid)
    updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  const setMovieWatched: UserContextType['setMovieWatched'] = (movie) => {
    const userRef = doc(usersCollection, uid)
    updateDoc(userRef, {
      movies: arrayUnion(movie),
    })
  }

  const value: UserContextType = {
    usersCollection,

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
