import React, { useState } from 'react'
import type { Provider } from '@types'
import { AuthContext } from '@contexts'

export const AuthProvider: React.FC<Provider> = ({ children }) => {
  const [keepLogged, setKeepLogged] = useState<boolean>(false)

  async function signUp() {
    return false
  }

  return (
    <AuthContext.Provider
      value={{
        keepLogged,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
