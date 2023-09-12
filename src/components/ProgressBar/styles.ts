import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: '4px',
  alignItems: 'center',
})

export const Number = styled.Text((props) => {
  return {
    color: props.theme.palette.text.light,
    fontVariant: 'tabular-nums',
    textAlign: 'center',
  }
})

export const Track = styled.View((props) => {
  return {
    backgroundColor: props.theme.palette.background.container,
    height: '8px',
    borderRadius: props.theme.radius.borderRadius7,
    flex: 1,
    marginHorizontal: '10px',
    overflow: 'hidden',
  }
})

export const Progress = styled(Animated.View)((props) => {
  return {
    backgroundColor: props.theme.palette.primary.default,
    width: '200%',
    height: '100%',
    borderRadius: props.theme.radius.borderRadius7,
  }
})
