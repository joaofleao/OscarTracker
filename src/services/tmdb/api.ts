import axios from 'axios'

import { tmdbConfig } from './config'

const apiBaseUrl = tmdbConfig.api_base_url
const apiKey = tmdbConfig.api_key
const imageBaseUrl = tmdbConfig.image_base_url

const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 60000,
})

const getImage = (id: string): any => {
  return imageBaseUrl + id
}

const getMovie = async (id: string): Promise<any> => {
  const response = await api.get(`movie/${id}`, {
    params: { api_key: apiKey, language: 'en-US' },
  })
  return response.data
}

const getCast = async (id: string): Promise<any> => {
  const response = await api.get(`movie/${id}/credits`, {
    params: { api_key: apiKey, language: 'en-US' },
  })
  return response.data
}

const getVideos = async (id: string): Promise<any> => {
  const response = await api.get(`movie/${id}/videos`, {
    params: { api_key: apiKey, language: 'en-US' },
  })
  return response.data
}

const getProviders = async (id: string): Promise<any> => {
  const response = await api.get(`movie/${id}/watch/providers`, {
    params: { api_key: apiKey, language: 'en-US' },
  })
  return response.data
}

export { getCast, getImage, getMovie, getProviders, getVideos }
