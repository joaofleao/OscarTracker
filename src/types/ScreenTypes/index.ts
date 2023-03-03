export type ScreenTypes = {
  IndexScreen: undefined
  SignInScreen: undefined
  SignUpEmailScreen: undefined
  SignUpPasswordScreen: {
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
  NominationScreen: {
    id: string
  }
}
