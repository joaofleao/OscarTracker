import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  movingBackground: ViewStyle
  blur: ViewStyle
  title: TextStyle
}

const useStyles = (): StylesReturn => {
  const { fonts, colors } = useTheme()

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderRadius: 12,
      overflow: 'hidden',
    },
    movingBackground: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    blur: {
      flex: 1,
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    title: {
      color: colors.text.default,
      fontFamily: fonts.primary.bold,
      textAlign: 'center',
    },
  })
}

export default useStyles
