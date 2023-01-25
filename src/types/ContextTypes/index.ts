import { Nomination } from '../../types'

export type AuthContextType = {
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (email: string, password: string) => Promise<boolean>
  signOut: () => void
  setUser: (user: any) => void
  user: any
  initializing: boolean
}
export type DataContextType = {
  currentNominations: any | null
  currentNominationsByCategory: any | null
  currentCategoriesMap: any | null
  currentMovies: any | null
  currentMoviesMap: any | null
  getMovieNominations: (movie: string) => any
}

export type ThemeContextType = {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
}
