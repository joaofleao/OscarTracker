export type ScreenTypes = {
  SplashScreen: undefined
  LoadingScreen: {
    await: number | undefined
    text: string
    destination: string
  }
  SignInScreen: undefined
  SignUpEmail: undefined
  SignUpPassword: undefined
  HomeScreen: undefined
}
