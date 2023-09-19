import { styled } from 'styled-components/native'

interface TextProps {
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

export const TextContainer = styled.View(() => {
  return {
    flex: 1,
    justifyContent: 'center',
  }
})

export const Title = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader ? '24px' : '20px',
    lineHeight: props.bigHeader ? '32px' : '26px',
    fontFamily: props.theme.typography.primary.semibold,
    textAlign: props.align,
  }
})

export const Logo = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader ? '24px' : '20px',
    lineHeight: props.bigHeader ? '32px' : '26px',
    fontFamily: props.theme.typography.secondary.semibold,
    textAlign: props.align,
  }
})

export const Description = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.text.light,
    fontSize: props.bigHeader ? '18px' : '16px',
    lineHeight: props.bigHeader ? '32px' : '26px',
    fontFamily: props.theme.typography.primary.medium,
    textAlign: props.align,
  }
})
