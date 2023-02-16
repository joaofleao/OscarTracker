import { useState, useEffect } from 'react'
import { AuthContextType, Provider } from '../types'
import { AuthContext } from '../contexts'
import { useTheme, useUser } from '../hooks'
import { auth, db } from '../services'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { doc, setDoc, collection, onSnapshot } from 'firebase/firestore'

const AuthProvider: React.FC<Provider> = ({ children }) => {
  const { setDisplayName, setEmail, setEmailVerified, setPhoneURL, setPreferences, setUid, setWatchedMovies } =
    useUser()
  const { startLoading, stopLoading } = useTheme()
  const [initializing, setInitializing] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const users = collection(db, 'users')

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user: User | null) => {
      setUser(user)
    })
    console.log(user)

    return () => unsubscribeAuth()
  }, [])

  useEffect(() => {
    console.log(user)
    if (user) {
      setInitializing(false)
      const userRef = doc(users, user.uid)
      const unsubscribe = onSnapshot(userRef, snap => {
        const response = snap.data()
        if (response) {
          setDisplayName(response.displayName)
          setEmail(response.email)
          setEmailVerified(response.emailVerified)
          setPhoneURL(response.photoURL)
          setPreferences(response.preferences)
          setUid(response.uid)
          setWatchedMovies(response.movies)
        }
      })
      return () => unsubscribe()
    }
  }, [user])

  useEffect(() => {
    console.log(initializing)
  }, [initializing])

  const signIn = async (email: string, password: string) => {
    startLoading('Signin in')
    return await signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        stopLoading()
        setUser(response.user)
        return true
      })
      .catch(error => {
        console.log(error.code, error.message)
        stopLoading()
        return false
      })
  }

  const signUp = async (email: string, password: string, displayName: string, avatar: any) => {
    startLoading('Creating an Account')
    const response = createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        addUser(response.user, displayName, avatar)
        return true
      })
      .catch(error => {
        console.log(error.code, error.message)
        stopLoading()
        return false
      })
    return response
  }

  const addUser = async (user: User, displayName: string, avatar: any) => {
    const object = {
      email: user.email || '',
      displayName: displayName,
      photoURL: avatar,
      uid: user.uid,
      emailVerified: user.emailVerified,
      movies: [],
      preferences: {
        poster: false,
        cast: false,
        plot: false,
        ratings: false,
      },
    }
    const userRef = doc(users, user.uid)

    await setDoc(userRef, object)
      .then(() => {
        setUser(user)
        setDisplayName(object.displayName)
        setEmail(object.email)
        setEmailVerified(object.emailVerified)
        setPhoneURL(object.photoURL)
        setPreferences(object.preferences)
        setUid(object.uid)
        setWatchedMovies(object.movies)
        stopLoading()
      })
      .catch(error => {
        console.log(error.code, error.message)
        stopLoading()
        return false
      })
  }

  const signOutFunction = async () => {
    startLoading('Signing Out')
    const response = signOut(auth)
      .then(() => {
        setUser(null)
        setInitializing(true)
        stopLoading()
        return true
      })
      .catch(error => {
        console.log(error.code, error.message)

        stopLoading()
        return false
      })
    return response
  }

  const updatePreferences = async () => {
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
    initializing,
    signIn,
    signUp,
    signOut: signOutFunction,
    setUser,
  } satisfies AuthContextType

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
