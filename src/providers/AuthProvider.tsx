import { useState, useMemo, useEffect } from 'react'
import { AuthContextType, Provider, UserType } from '../types'
import { AuthContext } from '../contexts'
import { useTheme } from '../hooks'
import { auth, db } from '../services'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { doc, setDoc, collection, getDoc, onSnapshot } from 'firebase/firestore'

const AuthProvider: React.FC<Provider> = ({ children }) => {
  const { startLoading, stopLoading } = useTheme()
  const [initializing, setInitializing] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<any>()
  const users = collection(db, 'users')

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user: User | null) => {
      setUser(user)
      if (user) {
        const userRef = doc(users, user.uid)
        const unsubscribe = onSnapshot(userRef, snap => {
          const response = snap.data()
          setUserData(response)
        })
        return () => unsubscribe()
      }
    })

    return () => unsubscribeAuth()
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
        addUser(response.user)
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

  const addUser = async (user: User) => {
    const object = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      uid: user.uid,
      emailVerified: user.emailVerified,
      movies: [],
    }
    const userRef = doc(users, user.uid)
    await setDoc(userRef, object).then(() => setUserData(object))
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

  const value = {
    user,
    initializing,
    signIn,
    signUp,
    signOut: signOutFunction,
    setUser,
    userData,
  } satisfies AuthContextType

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
