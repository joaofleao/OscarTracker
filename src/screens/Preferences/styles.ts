import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  headerRoot: ViewStyle
  stepScreen: ViewStyle
  content: ViewStyle
  list: ViewStyle
  buttonContainer: ViewStyle
}

const useStyles = (): StylesReturn => {
  return StyleSheet.create({
    headerRoot: {
      opacity: 0,
    },
    stepScreen: {
      margin: 20,
    },
    content: {
      paddingHorizontal: 20,
      flex: 1,
      gap: 32,
      marginBottom: 20,
    },
    list: {
      marginHorizontal: -20,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 16,
    },
  })
}

export default useStyles
