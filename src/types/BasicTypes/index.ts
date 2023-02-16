export type Provider = {
  children?: React.ReactNode
}
export type Nomination = {
  category: string
  movie: string
  person?: string
  information?: string
  extra?: string
}
export type Category = {
  id: string
  'en-US': string
  'pt-BR': string
}

export type PreferencesType = {
  poster: boolean
  cast: boolean
  plot: boolean
  ratings: boolean
}

export type UserType = {
  preferences: PreferencesType
  email: string
  displayName: string
  emailVerified: boolean
  phoneNumber: string
  photoURL: string
  watchedMovies: string[]
  uid: string
}

export type BasicMovieType = {
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
