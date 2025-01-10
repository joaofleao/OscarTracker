import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  title: TextStyle
}

const useStyles = (): StylesReturn => {
  const { fonts, colors } = useTheme()

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 20,
    },
    title: {
      color: colors.text.default,
      fontSize: 36,
      fontFamily: fonts.primary.regular,
      alignSelf: 'flex-start',
      marginVertical: 2,
    },
  })
}

export default useStyles
