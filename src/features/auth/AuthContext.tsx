import { createContext } from 'react'

import { User } from '@types'
export interface AuthContextType {
  signIn: (email: string, password: string) => void
  signUp: (email: string, password: string, displayName: string, nickName: string) => void
  signOut: () => void
  recoverPassword: (email: string) => void
  verifyEmail: () => void
  user: User
}

const AuthContext = createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'

export default AuthContext
