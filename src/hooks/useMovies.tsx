import { useContext } from 'react'

import { MoviesContext, type MoviesContextType } from '../contexts'

const useMovies = (): MoviesContextType => {
  const useMoviesContext = useContext(MoviesContext)

  if (useMoviesContext == null) {
    throw new Error('useMovies has to be used within <MoviesContext.Provider>')
  }
  return useMoviesContext
}

export default useMovies
