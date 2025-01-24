import { createContext } from 'react'

import { User, UserCredential } from '@types'
export interface AuthContextType {
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  addUser: (nickname: string, displayName: string) => Promise<void>
  signOut: () => Promise<void>
  recoverPassword: (email: string) => Promise<void>
  verifyEmail: () => Promise<void>
  user: User
}

const AuthContext = createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'

export default AuthContext
