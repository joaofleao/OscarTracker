import React, { useState } from 'react'

import LoadingContext, { type LoadingContextType } from './LoadingContext'

const LoadingProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [loadingText, setLoadingText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const startLoading = (text: string): void => {
    setLoadingText(text)
    setIsLoading(true)
  }

  const stopLoading = (): void => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const value = {
    isLoading,
    loadingText,
    stopLoading,
    startLoading,
  } satisfies LoadingContextType

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}

export default LoadingProvider
