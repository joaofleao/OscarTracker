import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  content: ViewStyle
  title: TextStyle
  information: TextStyle
  extra: TextStyle
}

const useStyles = (): StylesReturn => {
  const { fonts, colors } = useTheme()

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexDirection: 'row',
    },
    content: {
      marginLeft: 16,
      flex: 1,
    },
    title: {
      fontSize: 18,
      lineHeight: 28,
      fontFamily: fonts.primary.bold,
      color: colors.text.default,
    },
    information: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.primary.regular,
      color: colors.text.light,
    },
    extra: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.primary.regular,
      color: colors.primary.default,
    },
  })
}

export default useStyles
