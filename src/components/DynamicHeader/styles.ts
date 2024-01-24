import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const DynamicHeader = styled(Animated.View)(() => {
  return {
    justifyContent: 'flex-end',
    overflow: 'hidden',
    gap: '16px',
  }
})

export const StickyHeader = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.default,

    paddingHorizontal: '20px',
    gap: '16px',
    paddingBottom: '12px',
  }
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: props.theme.fonts.primary.semibold,
  }
})

export const SubTitle = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontSize: '20px',
    lineHeight: '36px',

    fontFamily: props.theme.fonts.primary.semibold,
  }
})
export const Description = styled.Text((props) => {
  return {
    color: props.theme.colors.text.light,
    fontSize: '20px',
    lineHeight: '36px',

    fontFamily: props.theme.fonts.primary.semibold,
  }
})

export const Accent = styled.Text((props) => {
  return {
    color: props.theme.colors.primary.default,
    fontFamily: props.theme.fonts.secondary.bold,
  }
})
