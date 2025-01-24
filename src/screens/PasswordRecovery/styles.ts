import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type StylesReturn = {
  header: ViewStyle
  content: TextStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    header: {
      gap: 12,
      justifyContent: 'center',
      paddingVertical: 80,
    },
    content: {
      gap: 20,
    },
  })
}

export default useStyles
