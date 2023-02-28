import { ScreenTypes } from '../types'

export const routes = {
  unlogged: {
    signIn: 'SignInScreen' as keyof ScreenTypes,
    signUpEmail: 'SignUpEmailScreen' as keyof ScreenTypes,
    signUpPassword: 'SignUpPasswordScreen' as keyof ScreenTypes,
    signUpName: 'SignUpNameScreen' as keyof ScreenTypes,
    signUpAvatar: 'SignUpAvatarScreen' as keyof ScreenTypes,
  },
  logged: {
    index: 'IndexScreen' as keyof ScreenTypes,
    home: 'HomeScreen' as keyof ScreenTypes,
    watchList: 'WatchListScreen' as keyof ScreenTypes,
    profile: 'ProfileScreen' as keyof ScreenTypes,
    movie: 'MovieScreen' as keyof ScreenTypes,
    preferences: 'PreferencesScreen' as keyof ScreenTypes,
    nomination: 'NominationScreen' as keyof ScreenTypes,
  },
}
