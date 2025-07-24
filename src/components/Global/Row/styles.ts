import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  row: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap: 20,
    },
  })
}

export default useStyles
