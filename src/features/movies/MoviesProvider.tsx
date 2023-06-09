import React from 'react'

import * as tmdb from '../../services/tmdb/api'
import type { CastType, MovieType, ProvidersType } from '../../types'
import MoviesContext, { type MoviesContextType } from './MoviesContext'

const MoviesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const getMovie = async (id: string): Promise<MovieType> => {
    const response = await tmdb.getMovie(id, 'pt-BR')
    return response.data
  }
  const getCast = async (id: string): Promise<CastType> => {
    const response = await tmdb.getCast(id, 'pt-BR')
    return response.data
  }
  const getTrailer = async (id: string): Promise<any> => {
    const response = await tmdb.getVideos(id, 'pt-BR')
    return response.data
  }
  const getProviders = async (id: string): Promise<ProvidersType> => {
    const response = await tmdb.getProviders(id, 'pt-BR')
    return response.data
  }

  const value = { getMovie, getCast, getTrailer, getProviders } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
