import { ScreenTypes } from '../types'

export const routes = {
  unprotected: {
    splashScreen: 'SplashScreen' as keyof ScreenTypes,
    loadingScreen: 'LoadingScreen' as keyof ScreenTypes,
  },
  unlogged: {
    signIn: 'SignInScreen' as keyof ScreenTypes,
    signUpEmail: 'SignUpEmailScreen' as keyof ScreenTypes,
    signUpPassword: 'SignUpPasswordScreen' as keyof ScreenTypes,
  },
  logged: {
    home: 'HomeScreen' as keyof ScreenTypes,
  },
}
