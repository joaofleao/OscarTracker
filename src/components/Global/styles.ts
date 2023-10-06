import { Animated } from 'react-native'
import styled from 'styled-components/native'

export interface Screen {
  showTop?: boolean
  showBottom?: boolean
}

export const Screen = styled.SafeAreaView<Screen>((props) => {
  return {
    backgroundColor: props.theme.colors.background.default,
    flex: 1,
    position: 'relative',
    paddingTop: props.showTop ? '20px' : '0px',
    paddingBottom: props.showBottom ? '20px' : '0px',
    gap: '20px',
  }
})

export const Separator = styled.View({
  width: '20px',
  height: '20px',
})

export const SmallSeparator = styled.View({
  width: '8px',
  height: '8px',
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '22px',
    lineHeight: '32px',
    color: props.theme.colors.text.default,
    letterSpacing: '1.5px',
  }
})

export const Description = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '16px',
    lineHeight: '24px',
    color: props.theme.colors.text.default,
    letterSpacing: '1px',
  }
})

export const Footer = styled(Animated.View)({
  position: 'absolute',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'flex-end',
})
