import { useState } from 'react'

import { UserContext } from '../contexts'
import { type PreferencesType, type Provider, UserType } from '../types'
import { type UserContextType } from '../types/ContextTypes'

const UserProvider: React.FC<Provider> = ({ children }) => {
  const [email, setEmail] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')
  const [emailVerified, setEmailVerified] = useState<boolean>(false)
  const [onboarding, setOnboarding] = useState<boolean>(true)
  const [nickName, setNickName] = useState<string>('')
  const [watchedMovies, setWatchedMovies] = useState<string[]>([])
  const [uid, setUid] = useState<string>('')
  const [preferences, setPreferences] = useState<PreferencesType>({
    poster: false,
    cast: false,
    plot: false,
    ratings: false,
  })

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
    onboarding,
    setOnboarding,
  } satisfies UserContextType

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
