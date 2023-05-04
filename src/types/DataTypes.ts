export interface Provider {
  children?: React.ReactNode
}
export interface Nomination {
  category: string
  movie: string
  person?: string
  information?: string
  extra?: string
}
export interface Category {
  id: string
  'en-US': string
  'pt-BR': string
}

export interface PreferencesType {
  poster: boolean
  cast: boolean
  plot: boolean
  ratings: boolean
}

export interface UserType {
  preferences: PreferencesType
  email: string
  displayName: string
  emailVerified: boolean
  phoneNumber: string
  photoURL: string
  watchedMovies: string[]
  uid: string
}

export interface BasicMovieType {
  item: {
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
}
