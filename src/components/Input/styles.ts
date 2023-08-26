import { Animated } from 'react-native'
import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.View(() => {
  return {}
})
export const Content = styled.View((props: StyledProps) => {
  return {
    backgroundColor: props.theme.palette.background.container,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    alignItems: 'center',
  }
})

interface InputProps extends StyledProps {
  isSearch: boolean
}

export const Input = styled.TextInput((props: InputProps) => {
  return {
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

interface TextProps extends StyledProps {
  isFocused: boolean
}

export const Label = styled.Text((props: TextProps) => {
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
    // alignItems: 'center',
  }
})

export const ErrorMessage = styled.Text((props: TextProps) => {
  return {
    fontSize: 14,
    marginLeft: 6,

    lineHeight: 14,
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.negative.default,
  }
})
