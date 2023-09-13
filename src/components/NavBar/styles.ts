import { Animated } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

export const Container = styled.View((props) => {
  return {
    flex: 1,
    backgroundColor: props.theme.palette.background.default,
  }
})

export const Selector = styled(Animated.View)(() => {
  const insets = useSafeAreaInsets()
  return {
    alignItems: 'center',
    bottom: insets.bottom + 16,
  }
})

export const Background = styled(Animated.View)((props) => {
  return {
    width: '12px',
    height: '6px',
    borderRadius: '12px',
    backgroundColor: props.theme.palette.primary.default,
  }
})
