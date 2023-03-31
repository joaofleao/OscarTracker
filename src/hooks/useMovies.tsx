import { useContext } from 'react'

import { MoviesContext } from '../contexts'

const useMovies = () => {
  return useContext(MoviesContext)
}

export default useMovies
