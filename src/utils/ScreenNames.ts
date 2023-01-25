import { ScreenTypes } from '../types'

export const routes = {
  unlogged: {
    signIn: 'SignInScreen' as keyof ScreenTypes,
    signUpEmail: 'SignUpEmailScreen' as keyof ScreenTypes,
    signUpPassword: 'SignUpPasswordScreen' as keyof ScreenTypes,
  },
  logged: {
    home: 'HomeScreen' as keyof ScreenTypes,
    watchList: 'WatchList' as keyof ScreenTypes,
    profile: 'Profile' as keyof ScreenTypes,
    movie: 'Movie' as keyof ScreenTypes,
  },
}
