import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  background: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    background: {
      backgroundColor: 'rgba(0,0,0,.5)',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  })
}

export default useStyles
