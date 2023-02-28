import { createContext } from 'react'
import { ToastContextType } from '../types'

const ToastContext = createContext<ToastContextType>({} as ToastContextType)
ToastContext.displayName = 'ToastContext'

export default ToastContext
