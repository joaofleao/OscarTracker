import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Content = styled.View((props) => {
  return {
    backgroundColor: props.theme.palette.background.container,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    alignItems: 'center',
  }
})

type InputProps = {
  isSearch: boolean
  ref: unknown
}

export const Input = styled.TextInput<InputProps>((props) => {
  return {
    ref: props.ref,
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: 18,
    flex: 1,
    marginRight: 10,
    marginTop: props.isSearch ? '0px' : 22,
    marginLeft: props.isSearch ? 10 : '0px',
    height: props.isSearch ? 50 : 20,
  }
})

export const LabelContainer = styled(Animated.View)(() => {
  return {
    position: 'absolute',
    top: '50%',
    left: 20,
  }
})

type LabelProps = {
  isFocused: boolean
}

export const Label = styled.Text<LabelProps>((props) => {
  return {
    color: props.isFocused ? props.theme.palette.primary.default : props.theme.palette.text.light,
    fontFamily: props.isFocused
      ? props.theme.typography.primary.bold
      : props.theme.typography.primary.bold,
    fontSize: 18,
  }
})

export const ErrorContainer = styled.View(() => {
  return {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 8,
  }
})

export const ErrorMessage = styled.Text((props) => {
  return {
    fontSize: 14,
    marginLeft: 6,

    lineHeight: '14px',
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.negative.default,
  }
})

export const Placeholder = styled.View(() => {
  return {
    height: 50,
  }
})
