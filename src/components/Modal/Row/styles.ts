import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  root: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    root: {
      gap: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
}

export default useStyles
