export type ScreenTypes = {
  SignInScreen: undefined
  SignUpEmail: undefined
  SignUpPassword: {
    email: string
  }
  HomeScreen: undefined
  WatchListScreen: undefined
  ProfileScreen: undefined
  MovieScreen: {
    id: string
    poster: string
    name: string
  }
}
