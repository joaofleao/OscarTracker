import { StyleSheet, TextStyle, useWindowDimensions, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  header: ViewStyle
  content: TextStyle
  list: ViewStyle
  centeredContent: ViewStyle
  countdown: TextStyle
  helper: TextStyle
}

const useStyles = (): StylesReturn => {
  const { fonts, colors } = useTheme()
  const { width } = useWindowDimensions()

  return StyleSheet.create({
    header: {
      gap: 12,
      justifyContent: 'center',
      paddingVertical: 80,
    },
    content: {
      gap: 28,
      width: width - 40,
      height: '100%',
    },
    centeredContent: {
      gap: 28,
      alignItems: 'center',
    },
    list: {},
    countdown: {
      fontFamily: fonts.secondary.bold,
      color: colors.primary.default,
    },
    helper: {
      fontFamily: fonts.secondary.regular,
      fontSize: 16,
      color: colors.text.default,
    },
  })
}

export default useStyles
