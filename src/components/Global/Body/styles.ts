import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  body: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    body: {
      paddingHorizontal: 20,
    },
  })
}

export default useStyles
