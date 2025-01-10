import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  row: ViewStyle
  content: ViewStyle
  input: TextStyle
  label: TextStyle
  errorText: TextStyle
  helperContainer: ViewStyle
}
type StylesProps = {
  isFocused: boolean
}

const useStyles = ({ isFocused }: StylesProps): StylesReturn => {
  const { fonts, colors } = useTheme()

  return StyleSheet.create({
    container: {
      gap: 4,
    },
    row: {
      flexDirection: 'row',
      gap: 8,
    },
    content: {
      backgroundColor: colors.background.container,
      borderRadius: 14,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 14,
      gap: 8,
      flex: 1,
    },
    input: {
      marginTop: 22,
      paddingTop: 22,
      height: 44 + 22,
      color: colors.text.default,
      fontFamily: fonts.primary.bold,
      fontSize: 16,
      flex: 1,
    },
    label: {
      color: isFocused ? colors.primary.default : colors.text.light,
      fontFamily: fonts.primary.bold,
      fontSize: 12,
      lineHeight: 18,
    },
    helperContainer: {
      zIndex: -200,
      backgroundColor: 'blue',
    },
    errorText: {
      position: 'absolute',
      right: 0,
      color: colors.negative.default,
      fontFamily: fonts.primary.bold,
      fontSize: 12,
      lineHeight: 18,
    },
  })
}

export default useStyles
