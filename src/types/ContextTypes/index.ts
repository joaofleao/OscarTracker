export type AuthContextType = {
  signIn: (password: string, email: string) => Promise<boolean>
  signUp: (password: string, email: string) => Promise<boolean>
  signInFacebook: () => void
  signInGoogle: () => void
  signOut: () => void
  setUser: (user: any) => void
  user: any
  initializing: boolean
}

export type ThemeContextType = {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
}
