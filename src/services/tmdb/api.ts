import { tmdbConfig } from './config'

import axios from 'axios'

const api_base_url = tmdbConfig.api_base_url
const api_key = tmdbConfig.api_key
const image_base_url = tmdbConfig.image_base_url

const getImage = (id: string) => {
  return image_base_url + id
}

export { getImage }
