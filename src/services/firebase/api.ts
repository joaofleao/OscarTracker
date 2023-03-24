import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./config"

import { getFirestore } from "firebase/firestore"
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

export { auth, db }
