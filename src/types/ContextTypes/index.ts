import { PreferencesType, User } from '../../types'

export type AuthContextType = {
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (email: string, password: string, displayName: string, nickName: any) => Promise<boolean>
  signOut: () => void
  setUser: (user: any) => void
  initializing: boolean
}

export type DataContextType = {
  currentNominations: any | null
  currentNominationsByCategory: any | null
  currentCategoriesMap: any | null
  currentMovies: any | null
  currentPeopleMap: any | null
  currentPeople: any | null
  currentMoviesMap: any | null
  getMovieNominations: (movie: string) => any
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

export type ThemeContextType = {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
}

export type UserContextType = {
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

export type ToastContextType = {
  showToast: (message: string, description: string, type: 'success' | 'error') => void
}
export type MoviesContextType = {
  getMovie: (id: string) => Promise<any>
}
