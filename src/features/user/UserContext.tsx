import { createContext } from 'react'

import type { Announcement, PreferencesType } from '@types'

export interface UserContextType {
  preferences: PreferencesType
  email: string
  displayName: string
  emailVerified: boolean
  nickName: string
  watchedMovies: string[]
  onboarding: boolean
  uid: string
  setUid: (uid: string) => void
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void

  announcements: Announcement[]

  setMovieUnwatched: (movie: string) => void
  setMovieWatched: (movie: string) => void
  updateUser: (
    email?: string,
    displayName?: string,
    nickName?: string,
    preferences?: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean },
    onboarding?: boolean,
  ) => void
}

const UserContext = createContext<UserContextType | null>(null)
UserContext.displayName = 'UserContext'

export default UserContext
