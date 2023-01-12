import { useContext } from 'react'
import { AuthContext } from '../contexts'
import type { AuthContextType } from '../contexts'

const useAuth = () => {
  return useContext(AuthContext) as AuthContextType
}

export default useAuth
