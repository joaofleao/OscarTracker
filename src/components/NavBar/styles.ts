import { Platform, StyleSheet, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  container: ViewStyle
  selector: ViewStyle
  background: ViewStyle
}

type StylesProps = {
  keyboardOpen?: boolean
}

const useStyles = ({ keyboardOpen }: StylesProps): StylesReturn => {
  const { colors } = useTheme()

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background.container,
      height: 72,
      width: '80%',
      alignSelf: 'center',
      borderRadius: 20,
      position: 'absolute',
      flexDirection: 'row',
      bottom: 0,
      opacity: keyboardOpen && Platform.OS === 'android' ? 0 : 1,
      maxWidth: 400,
      shadowColor: '#000',
      shadowOpacity: 0.37,
      shadowRadius: 8,
      elevation: 12,
    },
    selector: {
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
      zIndex: -1,
      position: 'absolute',
      width: '33%',
    },
    background: {
      width: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: colors.primary.default,
    },
  })
}

export default useStyles
