import { MoviesContext } from '../contexts'
import * as tmdb from '../services/tmdb/api'
import { type Provider } from '../types'
import { type MoviesContextType } from '../types/ContextTypes'

const MoviesProvider: React.FC<Provider> = ({ children }) => {
  const getMovie = async (id: string) => {
    return await tmdb.getMovie(id)
  }
  const getCast = async (id: string) => {
    return await tmdb.getCast(id)
  }
  const getTrailer = async (id: string) => {
    return await tmdb.getVideos(id)
  }
  const getProviders = async (id: string) => {
    return await tmdb.getProviders(id)
  }

  const value = { getMovie, getCast, getTrailer, getProviders } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
