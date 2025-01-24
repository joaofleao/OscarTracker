import { StyleSheet, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'
import useScreenInsets from '@hooks/useScreenInsets'

type StylesReturn = {
  container: ViewStyle
  footer: ViewStyle
  selector: ViewStyle
  background: ViewStyle
  progressContainer: ViewStyle
}

const useStyles = (): StylesReturn => {
  const { colors } = useTheme()

  const { bottom } = useScreenInsets()
  return StyleSheet.create({
    footer: {
      bottom: bottom,
      position: 'absolute',
      width: '100%',
      gap: 12,
      alignItems: 'center',
    },
    container: {
      backgroundColor: colors.background.container,
      borderRadius: 100,
      flexDirection: 'row',
      bottom: 0,
      alignSelf: 'center',
    },
    selector: {
      alignItems: 'center',
      height: '100%',
      position: 'absolute',
      width: '20%',
    },
    background: {
      width: 12,
      height: 4,
      borderRadius: 12,
      position: 'absolute',
      alignSelf: 'center',
      bottom: 12,
      backgroundColor: colors.primary.default,
    },
    progressContainer: {
      backgroundColor: colors.background.container,
      padding: 16,
      maxWidth: '88%',
      borderRadius: 48,
      alignSelf: 'center',
    },
  })
}

export default useStyles
