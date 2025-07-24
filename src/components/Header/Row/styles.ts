import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  root: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      gap: 16,
    },
  })
}

export default useStyles
