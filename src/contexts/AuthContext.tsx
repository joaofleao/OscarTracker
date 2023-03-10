import { createContext } from 'react'
import { AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)
AuthContext.displayName = 'AuthContext'

export default AuthContext
