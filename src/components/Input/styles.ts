import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Content = styled.View((props) => {
  const borderRadius = 12
  const padding = 9
  return {
    backgroundColor: props.theme.colors.background.container,
    borderRadius: `${borderRadius + padding}px`,
    flexDirection: 'row',
    padding: `${padding}px`,
    paddingLeft: '20px',
    alignItems: 'center',
    height: '56px',
  }
})

type InputProps = {
  isSearch: boolean
  ref: unknown
}

export const Input = styled.TextInput<InputProps>((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '18px',
    flex: 1,
    marginRight: '10px',
    marginLeft: props.isSearch ? '10px' : '0px',
    marginTop: props.isSearch ? '0px' : '16px',
  }
})

export const LabelContainer = styled(Animated.View)(() => {
  return {
    position: 'absolute',
    left: '20px',
  }
})

type LabelProps = {
  isFocused: boolean
}

export const Label = styled.Text<LabelProps>((props) => {
  return {
    color: props.isFocused ? props.theme.colors.primary.default : props.theme.colors.text.light,
    fontFamily: props.isFocused ? props.theme.fonts.primary.bold : props.theme.fonts.primary.bold,
    fontSize: '18px',
    paddingBottom: 2,
  }
})

export const ErrorContainer = styled.View(() => {
  return {
    flexDirection: 'row',
    marginTop: '12px',
    marginLeft: '8px',
  }
})

export const ErrorMessage = styled.Text((props) => {
  return {
    fontSize: '14px',
    marginLeft: '6px',

    lineHeight: '14px',
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.negative.default,
  }
})
