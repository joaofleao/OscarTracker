import { useContext } from 'react'

import { ToastContext, type ToastContextType } from '../contexts'

const useToast = (): ToastContextType => {
  const useToastContext = useContext(ToastContext)

  if (useToastContext == null) {
    throw new Error('useToast has to be used within <ToastContext.Provider>')
  }
  return useToastContext
}

export default useToast
