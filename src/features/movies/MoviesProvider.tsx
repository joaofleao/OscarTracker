import React from 'react'

import MoviesContext, { type MoviesContextType } from './MoviesContext'
import { useUser } from '@features/user'
import * as tmdb from '@services/tmdb/api'
import type { CastType, MovieType, ProvidersType } from '@types'
import { print } from '@utils/functions'

const MoviesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const { language } = useUser()
  const getMovie = async (id: string): Promise<MovieType> => {
    const response = await tmdb
      .getMovie(id, language)
      .then(() => {
        print('TMDB Movie', 'Fetched', 'yellow')
        return response.data
      })
      .catch((e) => {
        print('TMDB Movie', e.message, 'red')
      })
    return null
  }
  const getCast = async (id: string): Promise<CastType> => {
    const response = await tmdb
      .getCast(id, language)
      .then(() => {
        print('TMDB Cast', 'Fetched', 'yellow')
        return response.data
      })
      .catch((e) => {
        print('TMDB Cast', e.message, 'red')
      })
    return null
  }
  const getTrailer = async (id: string): Promise<string> => {
    const response = await tmdb
      .getVideos(id, language)
      .then(() => {
        print('TMDB Trailer', 'Fetched', 'yellow')
        return response.data
      })
      .catch((e) => {
        print('TMDB Trailer', e.message, 'red')
      })
    return null
  }
  const getProviders = async (id: string): Promise<ProvidersType> => {
    const response = await tmdb
      .getProviders(id, language)
      .then(() => {
        print('TMDB Providers', 'Fetched', 'yellow')
        return response.data
      })
      .catch((e) => {
        print('TMDB Providers', e.message, 'red')
      })
    return null
  }

  const value = { getMovie, getCast, getTrailer, getProviders } satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
