import { StyleSheet, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type StylesReturn = {
  navBarSeparator: ViewStyle
}

const useStyles = (): StylesReturn => {
  const insets = useSafeAreaInsets()
  return StyleSheet.create({
    navBarSeparator: {
      width: '100%',
      //insets + action button + gap + navbar + distance
      height: insets.bottom + 34 + 8 + 80 + 16,
    },
  })
}

export default useStyles
