import { styled } from 'styled-components/native'

export const Header = styled.View({
  marginHorizontal: '20px',
  gap: '12px',
  flex: 1,
  justifyContent: 'center',
})

export const Content = styled.View({
  marginHorizontal: '20px',
  gap: '20px',
  alignItems: 'center',
})

export const Footer = styled.View({
  marginHorizontal: '20px',
  gap: '20px',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
})

export const Countdown = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.primary.default,
  }
})

export const Helper = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.medium,
    fontSize: '16px',
    color: props.theme.colors.text.default,
  }
})
