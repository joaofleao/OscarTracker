export const routes = {
  unlogged: {
    signIn: 'SignIn' as const,
    signUpEmail: 'Email' as const,
    signUpPassword: 'Password' as const,
    signUpName: 'Name' as const,
    forgotPassword: 'PasswordRecovery' as const,
  },
  logged: {
    index: 'Index' as const,
    home: 'Home' as const,
    watchList: 'WatchList' as const,
    profile: 'Profile' as const,
    movie: 'Movie' as const,
    preferences: 'Preferences' as const,
    category: 'Category' as const,
    emailVerification: 'EmailVerification' as const,
  },
}

export default routes
