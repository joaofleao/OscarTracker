import { StyleSheet, TextStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  root: TextStyle
}

type StylesProps = {
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

const useStyles = ({ align, bigHeader }: StylesProps): StylesReturn => {
  const { fonts, colors } = useTheme()

  return StyleSheet.create({
    root: {
      color: colors.text.default,
      fontSize: bigHeader ? 24 : 20,
      lineHeight: 36,
      flex: 1,
      fontFamily: fonts.primary.semibold,
      textAlign: align,
    },
  })
}

export default useStyles
