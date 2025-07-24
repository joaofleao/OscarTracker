import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

const useKeyboard = (): boolean => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      return setIsKeyboardOpen(true)
    })
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      return setIsKeyboardOpen(false)
    })
    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return isKeyboardOpen
}

export default useKeyboard
