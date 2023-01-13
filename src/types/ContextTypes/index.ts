export type AuthContextType = {
  isLogged: boolean
  signIn: (password: string, email: string) => void
  signUp: (password: string, email: string) => void
  signInFacebook: () => void
  signInGoogle: () => void
  signOut: () => void
}

export type ThemeContextType = {
  isLoading: boolean
  loadingMessage: string
  setIsLoading: (isLoading: boolean) => void
  setLoadingMessage: (loadingMessage: string) => void
}
