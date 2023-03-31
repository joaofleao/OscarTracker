import { createContext } from 'react'

export interface DataContextType {
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
  updateUser: (email?: string, displayName?: string, nickName?: string, preferences?: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean }, onboarding?: boolean) => void
}

const DataContext = createContext<DataContextType | null>(null)
DataContext.displayName = 'DataContext'

export default DataContext
