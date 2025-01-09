import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  rule: TextStyle
  valid: TextStyle
}

const useStyles = (): StylesReturn => {
  const { colors, fonts } = useTheme()

  return StyleSheet.create({
    rule: {
      flex: 1,
      color: colors.text.light,
      fontFamily: fonts.primary.bold,
      fontSize: 12,
      lineHeight: 18,
    },
    valid: {
      color: colors.primary.default,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
  })
}

export default useStyles
