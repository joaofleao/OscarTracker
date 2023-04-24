import React from 'react'

import { MoviesContext, type MoviesContextType } from '../contexts'
import * as tmdb from '../services/tmdb/api'

const MoviesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const getMovie = async (id: string): Promise<any> => {
    return await tmdb.getMovie(id)
  }
  const getCast = async (id: string): Promise<any> => {
    return await tmdb.getCast(id)
  }
  const getTrailer = async (id: string): Promise<any> => {
    return await tmdb.getVideos(id)
  }
  const getProviders = async (id: string): Promise<any> => {
    return await tmdb.getProviders(id)
  }

  const value = { getMovie, getCast, getTrailer, getProviders } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
