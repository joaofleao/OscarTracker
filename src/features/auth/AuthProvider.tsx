import React, { useEffect, useState } from 'react'
import { type FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut as firebaseSignOut, type User } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'

import { useLoading, useToast, useUser } from '../../features'
import { auth, db } from '../../services'
import AuthContext, { type AuthContextType } from './AuthContext'

const AuthProvider = ({ children }: { children?: JSX.Element }): JSX.Element => {
  const { showToast } = useToast()
  const { setIsLogged, setUid } = useUser()
  const { startLoading, stopLoading } = useLoading()

  const [initializing, setInitializing] = useState<boolean>(true)

  const users = collection(db, 'users')

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user: User | null) => {
      if (user !== null) {
        setUid(user.uid)
        setIsLogged(true)
      }
      setInitializing(false)
    })
    return () => {
      unsubscribeAuth()
    }
  }, [])

  const showError = (error: FirebaseError): void => {
    showToast(error.code, error.message, 'error')
  }

  const signIn = (email: string, password: string): void => {
    startLoading('Signin in')
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUid(response.user.uid)
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
        setUid(user.uid)
      })
      .catch(showError)
      .finally(stopLoading)
  }

  const signOut = (): void => {
    startLoading('Signing Out')
    firebaseSignOut(auth)
      .then(() => {
        setIsLogged(false)
      })
      .catch(showError)
      .finally(stopLoading)
  }

  const recoverPassword = (email: string): void => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showToast('Email Sent', 'You will recieve an email to recover the password if your account exists.', 'success')
      })
      .catch(showError)
  }

  const value = {
    initializing,
    signIn,
    signUp,
    signOut,
    recoverPassword,
  } satisfies AuthContextType

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
