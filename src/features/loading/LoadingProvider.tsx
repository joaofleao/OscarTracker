import React, { useState } from 'react'

import LoadingContext, { type LoadingContextType } from './LoadingContext'

const LoadingProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [text, setText] = useState<string>('')
  const [isActive, setIsActive] = useState<boolean>(false)

  const start = (text: string): void => {
    setText(text)
    setIsActive(true)
  }

  const stop = (): void => {
    setTimeout(() => {
      setIsActive(false)
    }, 1000)
  }

  const value = {
    text,
    isActive,
    stop,
    start,
  } satisfies LoadingContextType

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}

export default LoadingProvider
