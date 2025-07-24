import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  separator: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    separator: {
      width: 20,
      height: 20,
    },
  })
}

export default useStyles
