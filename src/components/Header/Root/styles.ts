import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  root: ViewStyle
  between: ViewStyle
  center: ViewStyle
  right: ViewStyle
  left: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    root: {
      width: '100%',
      flexDirection: 'row',
      gap: 16,
      paddingHorizontal: 20,
      paddingVertical: 12,
      alignItems: 'center',
    },
    left: {
      justifyContent: 'flex-start',
    },
    between: {
      justifyContent: 'space-between',
    },
    center: {
      justifyContent: 'center',
    },
    right: {
      justifyContent: 'flex-end',
    },
  })
}

export default useStyles
