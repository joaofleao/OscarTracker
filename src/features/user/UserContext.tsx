import { createContext } from 'react'

import type { PreferencesType, UserType } from '@types'

export interface UserContextType {
  adminSettings: boolean
  setAdminSettings: (adminSettings: boolean) => void

  admin: boolean
  preferences: PreferencesType
  email: string
  displayName: string
  emailVerified: boolean
  nickname: string
  movies: string[]
  onboarding: boolean
  uid: string
  setUid: (uid: string) => void

  setUser: (user: UserType) => void

  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void

  setMovieUnwatched: (movie: string) => void
  setMovieWatched: (movie: string) => void
  updateUser: (
    email?: string,
    displayName?: string,
    nickname?: string,
    preferences?: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean },
    onboarding?: boolean,
  ) => void

  placeBet: (
    edition: string,
    category: string,
    nomination: string,
    bet: 'first' | 'second' | 'wish',
  ) => void
}

const UserContext = createContext<UserContextType | null>(null)
UserContext.displayName = 'UserContext'

export default UserContext
