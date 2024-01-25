import React from 'react'

import MoviesContext, { type MoviesContextType } from './MoviesContext'
import * as tmdb from '@services/tmdb/api'
import type { CastType, MovieType, ProvidersType } from '@types'
import { printFetch } from '@utils/functions'

const MoviesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const getMovie = async (id: string): Promise<MovieType> => {
    printFetch('TMDB', 'Movie fetched', 'yellow')
    const response = await tmdb.getMovie(id, 'en-US')
    return response.data
  }
  const getCast = async (id: string): Promise<CastType> => {
    printFetch('TMDB', 'Cast fetched', 'yellow')
    const response = await tmdb.getCast(id, 'en-US')
    return response.data
  }
  const getTrailer = async (id: string): Promise<string> => {
    printFetch('TMDB', 'Trailer fetched', 'yellow')
    const response = await tmdb.getVideos(id, 'en-US')
    return response.data
  }
  const getProviders = async (id: string): Promise<ProvidersType> => {
    printFetch('TMDB', 'Providers fetched', 'yellow')
    const response = await tmdb.getProviders(id, 'en-US')
    return response.data
  }

  const value = { getMovie, getCast, getTrailer, getProviders } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
