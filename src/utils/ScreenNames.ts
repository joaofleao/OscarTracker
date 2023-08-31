export const routes = {
  unlogged: {
    signIn: 'SignIn' as const,
    signUpEmail: 'Email' as const,
    signUpPassword: 'Password' as const,
    signUpName: 'Name' as const,
    forgotPassword: 'PasswordRecovery' as const,
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
