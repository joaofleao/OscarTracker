import { StyleSheet, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  header: ViewStyle
  floatingButton: ViewStyle
  item: ViewStyle
}

const useStyles = (): StylesReturn => {
  const { colors } = useTheme()
  return StyleSheet.create({
    item: {
      marginHorizontal: 20,
    },
    floatingButton: {
      backgroundColor: colors.background.default,
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
  })
}

export default useStyles
