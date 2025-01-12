import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  content: ViewStyle
  title: TextStyle
  information: TextStyle
  movie: TextStyle
  toggle: ViewStyle
  bets: ViewStyle
}

type StylesProps = {
  winner: boolean
}

const useStyles = ({ winner }: StylesProps): StylesReturn => {
  const { colors, fonts } = useTheme()
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 16,
    },
    content: {
      flex: 1,
      gap: 4,
    },
    title: {
      fontSize: 18,
      fontFamily: fonts.primary.bold,
      color: winner ? colors.primary.default : colors.text.default,
    },
    information: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.primary.regular,
      color: colors.text.light,
    },
    movie: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.primary.regular,
      color: colors.text.default,
    },
    toggle: {
      maxWidth: '45%',
    },
    bets: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      gap: 8,
      overflow: 'hidden',
      justifyContent: 'space-around',
    },
  })
}

export default useStyles
