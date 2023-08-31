import { createContext } from 'react'
export interface AuthContextType {
  signIn: (email: string, password: string) => void
  signUp: (email: string, password: string, displayName: string, nickName: any) => void
  signOut: () => void
  recoverPassword: (email: string) => void
}

const AuthContext = createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'

export default AuthContext
