import React, { useMemo, useState } from 'react'
import { createContext } from 'react'

import * as firebase from '../services/api/auth'

export type AuthContextType = {
  signInEmail: (email: string, password: string) => Promise<void>
  signInGoogle: () => Promise<void>
  signInFacebook: () => Promise<void>
  signOut: (data: any) => Promise<void>
  signUp: (data: any) => Promise<void>
}

const authValues = useMemo(
  () => ({
    signInGoogle: async () => {
      console.log('signInFacebook')
    },
    signInFacebook: async () => {
      console.log('signInFacebook')
    },
    signInEmail: async (email: string, password: string) => {
      const data = await firebase.signInEmail(email, password)
      console.log(data)
    },
    signOut: async (data: any) => {
      console.log('signOut')
    },
    signUp: async (data: any) => {
      console.log('signUp')
    },
  }),
  [],
)

const AuthContext = createContext<AuthContextType | null>(null)

export { AuthContext, authValues }
