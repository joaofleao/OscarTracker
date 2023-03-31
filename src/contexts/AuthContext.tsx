import { createContext } from 'react'

export interface AuthContextType {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName: string, nickName: any) => Promise<void>
  signOut: () => Promise<void>
  setUser: (user: any) => void
  initializing: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'

export default AuthContext
