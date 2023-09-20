import { Animated } from 'react-native'
import styled from 'styled-components/native'

interface ConteinerProps {
  isSuccess: boolean
}

export const Container = styled(Animated.View)<ConteinerProps>((props) => {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 20,
    position: 'absolute',
    marginHorizontal: '20px',
    padding: '16px',
    borderRadius: '12px',
    backgroundColor: props.isSuccess
      ? props.theme.palette.positive.default
      : props.theme.palette.negative.default,
  }
})

export const Content = styled.View(() => {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
})

export const Informations = styled.View({
  flex: 1,
  marginHorizontal: '16px',
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '16px',
    lineHeight: '24px',
  }
})

export const Description = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.medium,
    fontSize: '14px',
    lineHeight: '20px',
  }
})
