import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  root: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
  })
}

export default useStyles
