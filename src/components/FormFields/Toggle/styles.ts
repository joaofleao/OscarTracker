import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  toggle: ViewStyle
  indicator: ViewStyle
  label: TextStyle
}

type StylesProps = {
  selected: boolean
  disabled: boolean
}

const useStyles = ({ selected, disabled }: StylesProps): StylesReturn => {
  const { colors, fonts } = useTheme()

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 24,
      flex: 1,

      alignItems: 'center',
    },
    toggle: {
      borderWidth: 1,
      borderColor: colors.background.container,
      borderRadius: 24,

      width: 54,
      height: 30,

      flexDirection: 'row',
    },
    indicator: {
      backgroundColor: disabled
        ? colors.background.container
        : selected
        ? colors.primary.default
        : colors.primary.shades.shade10,
      height: 24,
      width: 24,
      margin: 2,
      borderRadius: 24,
      position: 'absolute',
    },
    label: {
      flex: 1,
      color: colors.text.default,
      fontFamily: fonts.primary.semibold,
      fontSize: 16,
    },
  })
}

export default useStyles
