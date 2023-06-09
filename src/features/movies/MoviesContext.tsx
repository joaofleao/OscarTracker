import { createContext } from 'react'

import type { CastType, MovieType, ProvidersType } from '../../types'

export interface MoviesContextType {
  getMovie: (id: string) => Promise<MovieType>
  getCast: (id: string) => Promise<CastType>
  getProviders: (id: string) => Promise<ProvidersType>
  getTrailer: (id: string) => Promise<any>
}

const MoviesContext = createContext<MoviesContextType | null>(null)
MoviesContext.displayName = 'MoviesContext'

export default MoviesContext
