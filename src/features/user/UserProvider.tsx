import React from 'react'
import { collection, doc, onSnapshot } from 'firebase/firestore'

import { db } from '../../services'
import { type PreferencesType } from '../../types'
import UserContext, { type UserContextType } from './UserContext'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const users = collection(db, 'users')
  const [isLogged, setIsLogged] = React.useState<boolean>(false)

  const [email, setEmail] = React.useState<string>('')
  const [displayName, setDisplayName] = React.useState<string>('')
  const [emailVerified, setEmailVerified] = React.useState<boolean>(false)
  const [onboarding, setOnboarding] = React.useState<boolean>(true)
  const [nickName, setNickName] = React.useState<string>('')
  const [watchedMovies, setWatchedMovies] = React.useState<string[]>([])
  const [uid, setUid] = React.useState<string>('')
  const [preferences, setPreferences] = React.useState<PreferencesType>({
    poster: false,
    cast: false,
    plot: false,
    ratings: false,
  })

  React.useEffect(() => {
    if (isLogged) {
      const userRef = doc(users, uid)
      const unsubscribe = onSnapshot(userRef, (snap) => {
        const response = snap.data()
        if (response !== undefined) {
          setDisplayName(response.displayName)
          setEmail(response.email)
          setEmailVerified(response.emailVerified)
          setNickName(response.nickName)
          setPreferences(response.preferences)
          setUid(response.uid)
          setWatchedMovies(response.movies)
          setOnboarding(response.onboarding)
        }
      })
      return () => {
        unsubscribe()
      }
    }
  }, [isLogged])

  const value = {
    preferences,
    setPreferences,
    email,
    setEmail,
    displayName,
    setDisplayName,
    emailVerified,
    setEmailVerified,
    nickName,
    setNickName,
    watchedMovies,
    setWatchedMovies,
    uid,
    setUid,
    isLogged,
    setIsLogged,
    onboarding,
    setOnboarding,
  } satisfies UserContextType

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
