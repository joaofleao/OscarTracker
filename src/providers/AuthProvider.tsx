import React from 'react'

import { AuthContext, authValues } from '../contexts'

type Provider = {
  children?: React.ReactNode
}

export const AuthProvider: React.FC<Provider> = ({ children }) => {
  return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
}
