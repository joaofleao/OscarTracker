import { StyleSheet, ViewStyle } from 'react-native'

type StylesReturn = {
  root: ViewStyle
}
type StylesProps = {
  selected: boolean
}

const useStyles = ({ selected }: StylesProps): StylesReturn => {
  return StyleSheet.create({
    root: {
      width: 80,
      height: 60,
      bottom: selected ? 4 : 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}

export default useStyles
