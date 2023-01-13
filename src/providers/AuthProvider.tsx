import { useState, useMemo } from 'react'
import { AuthContextType } from '../types'
import { AuthContext } from '../contexts'

type Provider = {
  children?: React.ReactNode
}

const AuthProvider: React.FC<Provider> = ({ children }) => {
  const [currentUser, setUser] = useState<string>('')
  const [isLogged, setIsLogged] = useState<boolean>(false)

  function signIn(email: string, password: string) {
    console.log(email, password)
  }
  function signUp(email: string, password: string) {}
  function signInGoogle() {}
  function signInFacebook() {}
  function signOut() {}

  const value = useMemo(
    () =>
      ({
        isLogged,
        signIn,
        signUp,
        signOut,
        signInFacebook,
        signInGoogle,
      } satisfies AuthContextType),
    [isLogged, signIn, signUp, signOut, signInFacebook, signInGoogle],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
