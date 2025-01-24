import { useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'

import useError from '../../hooks/useError'
import AuthContext, { type AuthContextType } from './AuthContext'
import { useToast } from '@features/toast'
import { useUser } from '@features/user'
import { auth, db } from '@services/firebase'
import { UserType } from '@types'

const AuthProvider = ({ children }: { children?: JSX.Element }): JSX.Element => {
  const toast = useToast()
  const { setUid } = useUser()
  const { showFirebaseError } = useError()

  const usersCollection = collection(db, 'users')

  //subscribes to auth changes
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((data: User | null) => {
      if (data !== undefined) {
        setUid(data?.uid)
      } else setUid(null)
    })
    return unsubscribeAuth
  }, [])

  const signIn: AuthContextType['signIn'] = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      setUid(response.user.uid)
      return response
    } catch (error) {
      showFirebaseError(error)
      throw error
    }
  }

  const signUp: AuthContextType['signUp'] = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      return response
    } catch (error) {
      showFirebaseError(error)
      throw error
    }
  }

  const addUser: AuthContextType['addUser'] = async (displayName, nickname) => {
    const userRef = doc(usersCollection, auth.currentUser.uid)

    const object: UserType = {
      email: auth.currentUser.email,
      displayName,
      nickname,
      uid: auth.currentUser.uid,
      movies: [],
      admin: false,
      onboarding: false,
      phoneNumber: null,
      photoURL: null,
      settings: {
        language: 'pt-BR',
        darkMode: true,
        preferences: {
          plot: false,
          cast: false,
          ratings: false,
          poster: false,
        },
      },
    }

    try {
      const response = await setDoc(userRef, object)
      setUid(auth.currentUser.uid)
      return response
    } catch (error) {
      showFirebaseError(error)
      throw error
    }
  }

  const signOut: AuthContextType['signOut'] = async () => {
    try {
      const response = await firebaseSignOut(auth)
      setUid(null)
      return response
    } catch (error) {
      showFirebaseError(error)
      throw error
    }
  }

  const recoverPassword: AuthContextType['recoverPassword'] = async (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.showToast(
          'Email Sent',
          'You will recieve an email to recover the password if your account exists.',
          'success',
        )
      })
      .catch(showFirebaseError)
  }

  const verifyEmail: AuthContextType['verifyEmail'] = async () => {
    const userValue = auth.currentUser
    sendEmailVerification(userValue)
  }

  const value: AuthContextType = {
    signIn,
    signUp,
    signOut,
    addUser,
    recoverPassword,
    verifyEmail,
    user: auth.currentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
