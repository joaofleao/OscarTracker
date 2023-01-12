import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../config/firebase'

import { initializeAuth, signInWithEmailAndPassword } from 'firebase/auth'

const app = initializeApp(firebaseConfig)

const auth = initializeAuth(app)

const signInEmail = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
  return response
}

export { signInEmail }
