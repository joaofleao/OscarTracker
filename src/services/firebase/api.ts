import AsyncStorage from '@react-native-async-storage/async-storage'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native'
import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'

import { firebaseConfig } from './config'

const app = initializeApp(firebaseConfig)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

export { auth, db }
