import { Provider } from '../types'
import { MoviesContext } from '../contexts'
import { MoviesContextType } from '../types/ContextTypes'
import * as tmdb from '../services/tmdb/api'

const MoviesProvider: React.FC<Provider> = ({ children }) => {
  const getMovie = async (id: string) => {
    return await tmdb.getMovie(id)
  }

  const value = { getMovie } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
