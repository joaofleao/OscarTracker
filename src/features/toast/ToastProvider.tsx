import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ToastNotificationComponent } from '../../components'
import { useTheme } from '../../features'
import ToastContext, { type ToastContextType } from './ToastContext'

const ToastProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const { isLoading } = useTheme()
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [toast, setToast] = useState<boolean>(false)
  const insets = useSafeAreaInsets()

  useEffect(() => {
    if (!isLoading && toast) {
      popIn()
      setToast(false)
    }
  }, [isLoading, toast])

  const showToast = (title: string, description: string, type: 'success' | 'error'): void => {
    setTitle(title)
    setDescription(description)
    setType(type)
    setToast(true)
  }

  const windowHeight = Dimensions.get('window').height
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current

  const popIn = (): any => {
    Animated.timing(popAnim, {
      toValue: insets.top,
      duration: 300,
      useNativeDriver: true,
    }).start()

    popOut()
  }

  const popOut = (): any => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }, 6000)
  }

  const value = {
    showToast,
  } satisfies ToastContextType

  return (
    <ToastContext.Provider value={value}>
      <ToastNotificationComponent
        title={title}
        description={description}
        type={type}
        position={popAnim}
      />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
