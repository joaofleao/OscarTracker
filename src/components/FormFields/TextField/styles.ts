import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View(() => {
  return {
    gap: '4px',
  }
})

export const Row = styled.View(() => {
  return {
    flexDirection: 'row',
    gap: '8px',
  }
})

export const Content = styled.Pressable((props) => {
  return {
    backgroundColor: props.theme.colors.background.container,
    borderRadius: '14px',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '14px',
    gap: '8px',
    flex: 1,
  }
})

export const Input = styled.TextInput((props) => {
  return {
    marginTop: '-22px',
    paddingTop: '22px',
    height: `${44 + 22}px`,
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '16px',
    flex: 1,
  }
})

type LabelProps = {
  isFocused: boolean
}

export const Label = styled.Text<LabelProps>((props) => {
  return {
    color: props.isFocused ? props.theme.colors.primary.default : props.theme.colors.text.light,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '12px',
    lineHeight: '18px',
  }
})

export const HelperContainer = styled(Animated.View)(() => {
  return {
    zIndex: -200,
    backgroundColor: 'blue',
  }
})

export const ErrorText = styled.Text((props) => {
  return {
    position: 'absolute',
    right: 0,
    color: props.theme.colors.negative.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '12px',
    lineHeight: '18px',
  }
})
