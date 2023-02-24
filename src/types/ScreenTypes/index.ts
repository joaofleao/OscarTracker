export type ScreenTypes = {
  SignInScreen: undefined
  SignUpEmail: undefined
  SignUpPassword: {
    email: string
  }
  SignUpNameScreen: {
    email: string
    password: string
  }
  PreferencesScreen: undefined
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
