import { Timestamp } from '@react-native-firebase/firestore'

export interface Provider {
  children?: React.ReactNode
}
export interface Nomination {
  id: string
  category: string
  movie: string

  person?: string
  song?: string
  country?: string
  character?: string
  url?: string
  nominees?: string
}
export interface CategoryType {
  id: string
  order: number
  name: LanguageType
}
export interface EditionType {
  winners: { [categoryId: string]: string }
  editionId: string
  categories: string[]
  year: number
  date: Timestamp
}
export type LanguageType = 'pt-BR' | 'en-US'

export interface PreferencesType {
  poster: boolean
  cast: boolean
  plot: boolean
  ratings: boolean
}
export interface SettingsType {
  darkMode: boolean
  language: LanguageType
}

export interface UserType {
  admin: boolean
  settings: SettingsType
  preferences: PreferencesType
  email: string
  displayName: string
  phoneNumber: string
  photoURL: string
  movies: string[]
  uid: string
  onboarding: boolean
  nickname: string
}

export interface BasicMovieType {
  name: LanguageType
  image: LanguageType
  imdb: string
  tmdb: string
}
export interface PersonType {
  image: string
  name: string
  imdb: string
  tmdb: string
}

export interface AnnouncementType {
  date: Date
  description: string
  title: string
  updates: string[]
  version: string
  url: string
}

export interface TMDBPerson {
  adult: boolean
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

export interface WatchedMovieType {
  date: unknown
  movie: string
}
