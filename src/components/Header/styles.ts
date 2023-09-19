import { styled } from 'styled-components/native'

interface Props {
  align?: 'center' | 'left' | 'right' | 'between'
}

export const Container = styled.View<Props>((props) => {
  const getAlignment = (): string => {
    if (props.align === 'between') return 'space-between'
    if (props.align === 'center') return 'center'
    if (props.align === 'right') return 'flex-end'
    return 'flex-start'
  }
  return {
    width: '100%',

    flexDirection: 'row',
    gap: '20px',
    justifyContent: getAlignment(),
    paddingHorizontal: '20px',
    marginTop: '10px',
    marginBottom: '20px',
    alignItems: 'center',
  }
})

export const TextContainer = styled.View(() => {
  return {
    flex: 1,
  }
})

interface TextProps {
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

export const Title = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader ? '24px' : '20px',
    lineHeight: '24px',
    fontFamily: props.theme.typography.primary.semibold,
    textAlign: props.align,
  }
})

export const Logo = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader ? '24px' : '20px',
    lineHeight: '24px',
    fontFamily: props.theme.typography.secondary.semibold,
    textAlign: props.align,
  }
})
export const LogoAccent = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.primary.default,
  }
})

export const Description = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.palette.text.light,
    fontSize: props.bigHeader ? '18px' : '16px',
    lineHeight: '24px',
    fontFamily: props.theme.typography.primary.medium,
    textAlign: props.align,
  }
})
