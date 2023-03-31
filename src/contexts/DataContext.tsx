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
  setMovieUnwatched: (movie: string) => any
  setMovieWatched: (movie: string) => any
  updateUser: (email?: string, displayName?: string, nickName?: string, preferences?: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean }, onboarding?: boolean) => any
}

const DataContext = createContext<DataContextType | null>(null)
DataContext.displayName = 'DataContext'

export default DataContext
