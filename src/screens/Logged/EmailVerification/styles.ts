import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  header: ViewStyle
  content: ViewStyle
  footer: ViewStyle
  countdown: TextStyle
  helper: TextStyle
}

const useStyles = (): StylesReturn => {
  const { fonts, colors } = useTheme()
  return StyleSheet.create({
    header: {
      marginHorizontal: 20,
      gap: 12,
      flex: 1,
      justifyContent: 'center',
    },
    content: {
      marginHorizontal: 20,
      gap: 20,
      alignItems: 'center',
    },
    footer: {
      marginHorizontal: 20,
      gap: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    countdown: {
      fontFamily: fonts.primary.bold,
      color: colors.primary.default,
    },
    helper: {
      fontFamily: fonts.primary.medium,
      fontSize: 16,
      color: colors.text.default,
    },
  })
}

export default useStyles
