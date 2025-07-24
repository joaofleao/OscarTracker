import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  smallSeparator: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    smallSeparator: {
      width: 8,
      height: 8,
    },
  })
}

export default useStyles
