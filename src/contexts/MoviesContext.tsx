import { createContext } from 'react'
import { MoviesContextType } from '../types'

const MoviesContext = createContext<MoviesContextType>({} as MoviesContextType)
MoviesContext.displayName = 'MoviesContext'

export default MoviesContext
