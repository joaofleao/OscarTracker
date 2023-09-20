import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
})

export const Number = styled.Text((props) => {
  return {
    color: props.theme.colors.text.light,
    fontVariant: 'tabular-nums',
    textAlign: 'center',
  }
})

export const Track = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.container,
    height: '6px',
    borderRadius: '6px',
    flex: 1,
    overflow: 'hidden',
  }
})

export const Progress = styled(Animated.View)((props) => {
  return {
    backgroundColor: props.theme.colors.primary.default,
    width: '200%',
    borderRadius: '6px',
    height: '100%',
  }
})
