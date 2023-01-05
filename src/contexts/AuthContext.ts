import { createContext } from 'react'

interface AuthContextData {
  keepLogged: boolean

  signUp(): Promise<boolean>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default AuthContext
