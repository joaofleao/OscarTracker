import React from 'react'

import { MoviesContext, type MoviesContextType } from '../contexts'
import * as tmdb from '../services/tmdb/api'

const MoviesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const getMovie = async (id: string): Promise<any> => {
    return tmdb.getMovie(id)
  }
  const getCast = async (id: string): Promise<any> => {
    return tmdb.getCast(id)
  }
  const getTrailer = async (id: string): Promise<any> => {
    return tmdb.getVideos(id)
  }
  const getProviders = async (id: string): Promise<any> => {
    return tmdb.getProviders(id)
  }

  const value = { getMovie, getCast, getTrailer, getProviders } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
