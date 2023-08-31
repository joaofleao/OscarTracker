import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// import { ToastNotification } from '../../components'
import { useLoading } from '../../features'
import ToastContext, { type ToastContextType } from './ToastContext'

const ToastProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const loading = useLoading()
  // const [title, setTitle] = useState<string>('')
  // const [description, setDescription] = useState<string>('')
  // const [type, setType] = useState<string>('')
  const [toast, setToast] = useState<boolean>(false)
  const insets = useSafeAreaInsets()

  const windowHeight = Dimensions.get('window').height
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current

  useEffect(() => {
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

    if (!loading.isActive && toast) {
      popIn()
      setToast(false)
    }
  }, [loading.isActive, toast, insets.top, popAnim, windowHeight])

  const showToast = () // title: string, description: string, type: 'success' | 'error'
  : void => {
    // setTitle(title)
    // setDescription(description)
    // setType(type)
    // setToast(true)
  }

  const value = {
    showToast,
  } satisfies ToastContextType

  return (
    <ToastContext.Provider value={value}>
      {/* <ToastNotification
        title={title}
        description={description}
        type={type}
        position={popAnim}
      /> */}
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
