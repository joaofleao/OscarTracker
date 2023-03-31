import { createContext } from 'react'

import { type PreferencesType } from '../types'

export interface UserContextType {
  preferences: PreferencesType
  setPreferences: (preferences: PreferencesType) => void
  email: string
  setEmail: (email: string) => void
  displayName: string
  setDisplayName: (displayName: string) => void
  emailVerified: boolean
  setEmailVerified: (emailVerified: boolean) => void
  nickName: string
  setNickName: (nickName: string) => void
  watchedMovies: string[]
  setWatchedMovies: (watchedMovies: string[]) => void
  uid: string
  setUid: (uid: string) => void
  onboarding: boolean
  setOnboarding: (onboarding: boolean) => void
}

const UserContext = createContext<UserContextType | null>(null)
UserContext.displayName = 'UserContext'

export default UserContext
