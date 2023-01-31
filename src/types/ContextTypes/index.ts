import { UserType, User } from '../../types'

export type AuthContextType = {
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (email: string, password: string) => Promise<boolean>
  signOut: () => void
  setUser: (user: any) => void
  user: User | null
  initializing: boolean
  userData: any
}
export type DataContextType = {
  currentNominations: any | null
  currentNominationsByCategory: any | null
  currentCategoriesMap: any | null
  currentMovies: any | null
  currentMoviesMap: any | null
  getMovieNominations: (movie: string) => any
  setMovieUnwatched: (movie: string) => void
  setMovieWatched: (movie: string) => void
}

export type ThemeContextType = {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
}
