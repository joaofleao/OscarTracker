import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'

import useError from '../../hooks/useError'
import AuthContext, { type AuthContextType } from './AuthContext'
import { useApp } from '@features/app'
import { useLoading } from '@features/loading'
import { useToast } from '@features/toast'
import { useUser } from '@features/user'
import { auth, db } from '@services/firebase'

const AuthProvider = ({ children }: { children?: JSX.Element }): JSX.Element => {
  const toast = useToast()
  const user = useUser()
  const loading = useLoading()
  const { showFirebaseError } = useError()
  const { hasInternet } = useApp()

  const users = collection(db, 'users')

  const signIn = (email: string, password: string): void => {
    loading.start('Signin in')
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        user.setUid(response.user.uid)
      })
      .catch(showFirebaseError)
      .finally(loading.stop)
  }

  const signUp = (email: string, password: string, displayName: string, nickName: string): void => {
    loading.start('Creating an Account')
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        addUser(response.user, displayName, nickName)
      })
      .catch(showFirebaseError)
      .finally(loading.stop)
  }

  const addUser = (newUser: User, displayName: string, nickName: string): void => {
    const userRef = doc(users, newUser.uid)

    const object = {
      email: newUser.email ?? '',
      displayName,
      nickName,
      uid: newUser.uid,
      emailVerified: newUser.emailVerified,
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
        user.setUid(newUser.uid)
      })
      .catch(showFirebaseError)
      .finally(loading.stop)
  }

  const signOut = (): void => {
    loading.start('Signing Out')
    firebaseSignOut(auth)
      .then(() => {
        user.setIsLogged(false)
      })
      .catch(showFirebaseError)
      .finally(loading.stop)
  }

  const recoverPassword = (email: string): void => {
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

  const value: AuthContextType = {
    signIn,
    signUp,
    signOut,
    recoverPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
