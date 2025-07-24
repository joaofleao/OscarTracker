import { Platform, StyleSheet, ViewStyle } from 'react-native'

import useScreenInsets from '@hooks/useScreenInsets'

type StylesReturn = {
  footer: ViewStyle
}

type StylesProps = {
  considerNavBar?: boolean
  keyboardOpen?: boolean
}

const useStyles = ({ considerNavBar, keyboardOpen }: StylesProps): StylesReturn => {
  const insets = useScreenInsets()
  return StyleSheet.create({
    footer: {
      gap: 16,
      opacity: keyboardOpen && Platform.OS === 'android' ? 0 : 1,
      bottom: (considerNavBar ? 60 : 0) + (Platform.OS === 'android' ? 0 : insets.bottom) + 12,
      position: 'absolute',
      alignSelf: 'center',
      alignItems: 'center',
    },
  })
}

export default useStyles
