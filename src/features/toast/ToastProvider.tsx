import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ToastContext, { type ToastContextType } from './ToastContext'
import ToastNotification from '@components/ToastNotification'
import { useLoading } from '@features/loading'

const ToastProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const loading = useLoading()
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [type, setType] = React.useState<string>('')
  const [toast, setToast] = React.useState<boolean>(false)
  const insets = useSafeAreaInsets()

  const windowHeight = Dimensions.get('window').height
  const popAnim = React.useRef(new Animated.Value(windowHeight * -1)).current

  React.useEffect(() => {
    const popIn = (): void => {
      Animated.timing(popAnim, {
        toValue: insets.top + 20,
        duration: 300,
        useNativeDriver: true,
      }).start()

      popOut()
    }

    const popOut = (): void => {
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

  const showToast = (_title: string, _description: string, _type: 'success' | 'error'): void => {
    setTitle(_title)
    setDescription(_description)
    setType(_type)
    setToast(true)
  }

  const value = {
    showToast,
  } satisfies ToastContextType

  return (
    <ToastContext.Provider value={value}>
      <ToastNotification
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
