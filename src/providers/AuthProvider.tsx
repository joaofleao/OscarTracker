import React, { useEffect, useState } from 'react'
import { type FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'

import { AuthContext, type AuthContextType } from '../contexts'
import { useTheme, useToast, useUser } from '../hooks'
import { auth, db } from '../services'

const AuthProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const { showToast } = useToast()
  const { setDisplayName, setEmail, setEmailVerified, setNickName, setPreferences, setUid, setWatchedMovies, setOnboarding } = useUser()
  const { startLoading, stopLoading } = useTheme()

  const [initializing, setInitializing] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)

  const users = collection(db, 'users')

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

  const showError = (error: FirebaseError): void => {
    showToast(error.code, error.message, 'error', false)
  }

  const signIn = (email: string, password: string): void => {
    startLoading('Signin in')
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user)
      })
      .catch(showError)
      .finally(stopLoading)
  }

  const signUp = (email: string, password: string, displayName: string, nickName: string): void => {
    startLoading('Creating an Account')
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        addUser(response.user, displayName, nickName)
      })
      .catch(showError)
      .finally(stopLoading)
  }

  const addUser = (user: User, displayName: string, nickName: string): void => {
    const userRef = doc(users, user.uid)

    const object = {
      email: user.email ?? '',
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

    setDoc(userRef, object)
      .then(() => {
        setUser(user)
        setDisplayName(object.displayName)
        setEmail(object.email)
        setEmailVerified(object.emailVerified)
        setNickName(object.nickName)
        setPreferences(object.preferences)
        setUid(object.uid)
        setWatchedMovies(object.movies)
      })
      .catch(showError)
      .finally(stopLoading)
  }

  const signOutFunction = (): void => {
    startLoading('Signing Out')
    signOut(auth)
      .then(() => {
        setUser(null)
        setInitializing(true)
      })
      .catch(showError)
      .finally(stopLoading)
  }
  const recoverPassword = (email: string): void => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showToast('Email Sent', 'You will recieve an email to recover the password if your account exists.', 'success', true)
      })
      .catch(showError)
  }

  const value = {
    initializing,
    signIn,
    signUp,
    signOut: signOutFunction,
    setUser,
    recoverPassword,
  } satisfies AuthContextType

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
