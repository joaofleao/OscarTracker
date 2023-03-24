import type { PreferencesType } from "../../types"

export interface DataContextType {
  currentNominations: any | null
  currentNominationsByCategory: any | null
  currentCategoriesMap: any | null
  currentMovies: any | null
  currentMoviesMap: any | null
  getMovieNominations: (movie: string) => any
  setMovieUnwatched: (movie: string) => void
  setMovieWatched: (movie: string) => void
  updateUser: (
    email?: string,
    displayName?: string,
    nickName?: string,
    preferences?: {
      poster: boolean
      plot: boolean
      cast: boolean
      ratings: boolean
    },
    onboarding?: boolean
  ) => void
}

export interface ThemeContextType {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
}

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
