import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const useScreenInsets = (): { bottom: number; top: number; left: number; right: number } => {
  const { bottom, top, left, right } = useSafeAreaInsets()

  const additionalPadding = Platform.OS === 'android' ? 20 : 0

  return {
    bottom: bottom + additionalPadding,
    top: top + additionalPadding,
    left,
    right,
  }
}

export default useScreenInsets
