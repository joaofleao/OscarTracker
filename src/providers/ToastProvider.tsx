import { useState, useRef, useEffect } from 'react'
import { Provider } from '../types'
import { ToastContext } from '../contexts'
import { ToastContextType } from '../types/ContextTypes'
import { ButtonComponent, ToastNotificationComponent } from '../components'
import { Dimensions, Animated } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '../hooks'

const ToastProvider: React.FC<Provider> = ({ children }) => {
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
  }, [isLoading])

  const showToast = (title: string, description: string, type: string) => {
    setTitle(title)
    setDescription(description)
    setType(type)
    setToast(true)
  }

  const windowHeight = Dimensions.get('window').height
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: insets.top,
      duration: 300,
      useNativeDriver: true,
    }).start()

    popOut()
  }

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }, 2000)
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
