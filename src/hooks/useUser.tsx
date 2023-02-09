import { useContext } from 'react'
import { UserContext } from '../contexts'

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
