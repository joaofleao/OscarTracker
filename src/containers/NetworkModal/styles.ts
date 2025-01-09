import { StyleSheet, TextStyle } from 'react-native'

type StylesReturn = {
  confirmationButton: TextStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    confirmationButton: {
      alignSelf: 'center',
    },
  })
}

export default useStyles
