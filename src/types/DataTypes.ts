export interface Provider {
  children?: React.ReactNode
}
export interface Nomination {
  id: string
  category: string
  movie: string
  person: string | undefined
  information: string | undefined
  song: string | undefined
}
export interface CategoryType {
  id: string
  order: number
  'en-US': string
  'pt-BR': string
}
export interface EditionType {
  winners: { [categoryId: string]: string }
  editionId: string
  categories: string[]
  year: number
}

export interface PreferencesType {
  poster: boolean
  cast: boolean
  plot: boolean
  ratings: boolean
}

export interface UserType {
  admin: boolean
  preferences: PreferencesType
  email: string
  displayName: string
  emailVerified: boolean
  phoneNumber: string
  photoURL: string
  movies: string[]
  uid: string
  onboarding: boolean
  nickname: string
}

export interface BasicMovieType {
  'en-US': {
    image: string
    name: string
  }
  'pt-BR': {
    image: string
    name: string
  }
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
