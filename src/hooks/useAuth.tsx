import { useContext } from 'react'

import { AuthContext, type AuthContextType } from '../contexts'

const useAuth = (): AuthContextType => {
  const userAuthContext = useContext(AuthContext)

  if (userAuthContext == null) {
    throw new Error('useCurrentUser has to be used within <CurrentUserContext.Provider>')
  }
  return userAuthContext
}

export default useAuth
