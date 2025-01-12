import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  content: ViewStyle
  accent: TextStyle
}

const useStyles = (): StylesReturn => {
  const { colors, fonts } = useTheme()
  return StyleSheet.create({
    content: {
      paddingHorizontal: 20,
      flex: 1,
    },
    accent: {
      color: colors.primary.default,
      fontFamily: fonts.primary.bold,
    },
  })
}

export default useStyles
