export const routes = {
  unlogged: {
    signIn: 'SignInScreen' as const,
    signUpEmail: 'SignUpEmailScreen' as const,
    signUpPassword: 'SignUpPasswordScreen' as const,
    signUpName: 'SignUpNameScreen' as const,
    signUpAvatar: 'SignUpAvatarScreen' as const,
    forgotPassword: 'ForgotPasswordScreen' as const,
  },
  logged: {
    index: 'IndexScreen' as const,
    home: 'HomeScreen' as const,
    watchList: 'WatchListScreen' as const,
    profile: 'ProfileScreen' as const,
    movie: 'MovieScreen' as const,
    preferences: 'PreferencesScreen' as const,
    nomination: 'NominationScreen' as const,
  },
}
