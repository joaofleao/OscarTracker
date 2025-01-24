import { Timestamp } from 'firebase/firestore'

export interface Provider {
  children?: React.ReactNode
}
export interface Nomination {
  id: string
  category: string
  movie: string
  person: string | undefined
  song: string | undefined
  character: string | undefined
  information: string | undefined
}
export interface CategoryType {
  id: string
  order: number
  name: {
    'en-US': string
    'pt-BR': string
  }
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
  preferences: PreferencesType
}

export interface UserType {
  admin: boolean
  settings: SettingsType
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
  name: { 'en-US': string; 'pt-BR': string }
  image: { 'en-US': string; 'pt-BR': string }
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
