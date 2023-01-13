import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './config'

import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const app = initializeApp(firebaseConfig)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

export { auth }
