import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  content: ViewStyle
  contentContainer: ViewStyle
  section: ViewStyle
  item: ViewStyle

  accentText: TextStyle
}

const useStyles = (): StylesReturn => {
  const { colors, fonts } = useTheme()
  return StyleSheet.create({
    content: {
      paddingHorizontal: 20,
    },
    contentContainer: {
      flex: 1,
      gap: 40,
    },
    section: {
      gap: 16,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    accentText: {
      color: colors.primary.default,
      fontFamily: fonts.primary.bold,
      fontSize: 16,
      lineHeight: 24,
    },
  })
}

export default useStyles
