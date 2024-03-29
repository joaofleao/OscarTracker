import axios, { type AxiosResponse } from 'axios'

import { tmdbConfig } from './config'
import type { CastType, MovieType, ProvidersType } from '@types'

const apiBaseUrl = tmdbConfig.api_base_url
const apiKey = tmdbConfig.api_key
const imageBaseUrl = tmdbConfig.image_base_url

const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 60000,
})

export const getImage = (id: string, quality = 200): string => {
  return `${imageBaseUrl}w${quality}${id}`
}

export const getMovie = async (id: string, language: string): Promise<AxiosResponse<MovieType>> => {
  const response: AxiosResponse<MovieType> = await api.get(`movie/${id}`, {
    params: { api_key: apiKey, language },
  })
  return response
}

export const getCast = async (id: string, language: string): Promise<AxiosResponse<CastType>> => {
  const response: AxiosResponse<CastType> = await api.get(`movie/${id}/credits`, {
    params: { api_key: apiKey, language },
  })
  return response
}

export const getVideos = async (id: string, language: string): Promise<AxiosResponse<string>> => {
  const response: AxiosResponse<string> = await api.get(`movie/${id}/videos`, {
    params: { api_key: apiKey, language },
  })
  return response
}

export const getProviders = async (
  id: string,
  language: string,
): Promise<AxiosResponse<ProvidersType>> => {
  const response: AxiosResponse<ProvidersType> = await api.get(`movie/${id}/watch/providers`, {
    params: { api_key: apiKey, language },
  })
  return response
}
