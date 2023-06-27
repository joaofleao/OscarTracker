import { createContext } from 'react'

export interface ToastContextType {
  showToast: (title: string, description: string, type: 'success' | 'error') => void
}

const ToastContext = createContext<ToastContextType | null>(null)
ToastContext.displayName = 'ToastContext'

export default ToastContext