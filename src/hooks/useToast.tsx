import { useContext } from 'react'
import { ToastContext } from '../contexts'

const useToast = () => {
  return useContext(ToastContext)
}

export default useToast
