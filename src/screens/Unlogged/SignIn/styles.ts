import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  header: ViewStyle
  content: TextStyle
  buttonContainer: ViewStyle
  forgotLabel: TextStyle
  forgotButton: ViewStyle
}

const useStyles = (): StylesReturn => {
  const { fonts, colors } = useTheme()

  return StyleSheet.create({
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 100,
    },
    content: {
      gap: 28,
    },
    buttonContainer: {
      alignItems: 'center',
    },
    forgotLabel: {
      fontFamily: fonts.primary.bold,
      fontSize: 12,
      color: colors.primary.default,
    },
    forgotButton: {
      padding: 12,
    },
  })
}

export default useStyles
