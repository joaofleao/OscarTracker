import React, { useState, useEffect } from "react"
import { type Provider } from "../types"
import { useTheme, useUser } from "../hooks"
import { auth, db } from "../services"

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth"
import { doc, setDoc, collection, onSnapshot } from "firebase/firestore"
import { AuthContext } from "../contexts"

const AuthProvider: React.FC<Provider> = ({ children }: any) => {
  const {
    setDisplayName,
    setEmail,
    setEmailVerified,
    setNickName,
    setPreferences,
    setUid,
    setWatchedMovies,
    setOnboarding,
  } = useUser()
  const { startLoading, stopLoading } = useTheme()
  const [initializing, setInitializing] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const users = collection(db, "users")

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user: User | null) => {
      setUser(user)
    })

    return () => {
      unsubscribeAuth()
    }
  }, [])

  useEffect(() => {
    if (user != null) {
      setInitializing(false)
      const userRef = doc(users, user.uid)
      const unsubscribe = onSnapshot(userRef, (snap) => {
        const response = snap.data()
        if (response != null) {
          setDisplayName(response.displayName)
          setEmail(response.email)
          setEmailVerified(response.emailVerified)
          setNickName(response.nickName)
          setPreferences(response.preferences)
          setUid(response.uid)
          setWatchedMovies(response.movies)
          setOnboarding(response.onboarding)
        }
      })
      return () => {
        unsubscribe()
      }
    }
  }, [user])

  const signIn = async (email: string, password: string): Promise<any> => {
    startLoading("Signin in")
    return await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        stopLoading()
        setUser(response.user)
        return true
      })
      .catch((error) => {
        console.log(error.code, error.message)
        stopLoading()
        return false
      })
  }

  const signUp = async (
    email: string,
    password: string,
    displayName: string,
    nickName: string
  ): Promise<any> => {
    startLoading("Creating an Account")
    const response = createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        void addUser(response.user, displayName, nickName)
        return true
      })
      .catch((error) => {
        console.log(error.code, error.message)
        stopLoading()
        return false
      })
    return await response
  }

  const addUser = async (
    user: User,
    displayName: string,
    nickName: string
  ): Promise<any> => {
    const object = {
      email: user.email === null ? "" : user.email,
      displayName,
      nickName,
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
        setNickName(object.nickName)
        setPreferences(object.preferences)
        setUid(object.uid)
        setWatchedMovies(object.movies)
        stopLoading()
      })
      .catch((error) => {
        console.log(error.code, error.message)
        stopLoading()
        return false
      })
  }

  const signOutFunction = (): void => {
    startLoading("Signing Out")
    signOut(auth)
      .then(() => {
        setUser(null)
        setInitializing(true)
        stopLoading()
        return true
      })
      .catch((error) => {
        console.log(error.code, error.message)

        stopLoading()
        return false
      })
  }

  // const updatePreferences = async (): Promise<any> => {
  //   const response = signOut(auth)
  //     .then(() => {
  //       setUser(null)
  //       stopLoading()
  //       return true
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       console.log(errorCode, errorMessage)

  //       stopLoading()
  //       return false
  //     })
  //   return await response
  // }

  const value = {
    initializing,
    signIn,
    signUp,
    signOut: signOutFunction,
    setUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
