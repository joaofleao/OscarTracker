import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  navBarSeparator: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    navBarSeparator: {
      width: '100%',
      height: 100,
    },
  })
}

export default useStyles
