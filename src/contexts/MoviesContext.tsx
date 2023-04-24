import { createContext } from 'react'

export interface MoviesContextType {
  getMovie: (id: string) => Promise<any>
  getCast: (id: string) => Promise<any>
  getTrailer: (id: string) => Promise<any>
  getProviders: (id: string) => Promise<any>
}

const MoviesContext = createContext<MoviesContextType | null>(null)
MoviesContext.displayName = 'MoviesContext'

export default MoviesContext
