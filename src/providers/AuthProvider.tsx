import { useState, useMemo, useEffect } from 'react'
import { AuthContextType, Provider } from '../types'
import { AuthContext } from '../contexts'
import { useTheme } from '../hooks'
import { auth } from '../services'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'

function onAuthStateChange(callback: any) {
  return auth.onAuthStateChanged((user: any) => {
    callback(user)
  })
}

const AuthProvider: React.FC<Provider> = ({ children }) => {
  const { startLoading, stopLoading } = useTheme()
  const [initializing, setInitializing] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    startLoading('Signin in')
    return await signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        stopLoading()
        setUser(response.user)
        return true
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)

        stopLoading()
        return false
      })
  }

  const signUp = async (email: string, password: string) => {
    startLoading('Creating an Account')
    const response = createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        stopLoading()
        setUser(response.user)
        return true
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)

        stopLoading()
        return false
      })
    return response
  }

  const signOutFunction = async () => {
    startLoading('Signing Out')
    const response = signOut(auth)
      .then(() => {
        setUser(null)
        stopLoading()
        return true
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)

        stopLoading()
        return false
      })
    return response
  }

  const value = useMemo(
    () =>
      ({
        user,
        initializing,
        signIn,
        signUp,
        signOut: signOutFunction,
        setUser,
      } satisfies AuthContextType),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
