import { StyleSheet, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type StylesReturn = {
  headerBarSeparator: ViewStyle
}

const useStyles = (): StylesReturn => {
  const insets = useSafeAreaInsets()
  return StyleSheet.create({
    headerBarSeparator: {
      width: '100%',
      //insets + header + distance
      height: insets.top + 62 + 16,
    },
  })
}

export default useStyles
