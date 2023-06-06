import { createContext } from 'react'

export interface LoadingContextType {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
}

const LoadingContext = createContext<LoadingContextType | null>(null)
LoadingContext.displayName = 'LoadingContext'

export default LoadingContext
