import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.Pressable(() => {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '12px',
  }
})

export const Background = styled(Animated.View)((props) => {
  return {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.theme.palette.background.container,
    padding: '10px',
  }
})
export const Title = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    textAlign: 'center',
  }
})
