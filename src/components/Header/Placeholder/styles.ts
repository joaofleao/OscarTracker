import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  root: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    root: {
      height: 36,
      width: 36,
    },
  })
}

export default useStyles
