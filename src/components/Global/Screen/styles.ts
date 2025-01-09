import { StyleSheet, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  screen: ViewStyle
}

const useStyles = (): StylesReturn => {
  const { colors } = useTheme()

  return StyleSheet.create({
    screen: {
      backgroundColor: colors.background.default,
      flex: 1,
      position: 'relative',
    },
  })
}

export default useStyles
