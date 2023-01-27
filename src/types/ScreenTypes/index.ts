export type ScreenTypes = {
  SignInScreen: undefined
  SignUpEmail: undefined
  SignUpPassword: {
    email: string
  }
  HomeScreen: {
    filter?: string
  }
  WatchListScreen: undefined
  ProfileScreen: undefined
  MovieScreen: {
    id: string
    poster: string
    name: string
  }
}
