export type ScreenTypes = {
  SignInScreen: undefined
  SignUpEmail: undefined
  SignUpPassword: {
    email: string
  }
  SignUpNameScreen: undefined
  SignUpAvatarScreen: undefined
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
