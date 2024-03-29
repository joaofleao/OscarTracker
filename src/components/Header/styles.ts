import { styled } from 'styled-components/native'

interface RootProps {
  align?: 'center' | 'left' | 'right' | 'between'
}

export const Root = styled.View<RootProps>((props) => {
  const getAlignment = (): string => {
    if (props.align === 'between') return 'space-between'
    if (props.align === 'center') return 'center'
    if (props.align === 'right') return 'flex-end'
    return 'flex-start'
  }
  return {
    width: '100%',
    flexDirection: 'row',
    gap: '16px',
    justifyContent: getAlignment(),
    paddingHorizontal: '20px',
    paddingVertical: '12px',
    alignItems: 'center',
  }
})

export const TextContainer = styled.View(() => {
  return {
    flex: 1,
    gap: '8px',
  }
})

interface TextProps {
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

export const Title = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.colors.text.default,
    fontSize: props.bigHeader ? '24px' : '20px',
    lineHeight: '36px',
    flex: 1,
    fontFamily: props.theme.fonts.primary.semibold,
    textAlign: props.align,
  }
})

export const Accent = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.colors.primary.default,
    fontFamily: props.theme.fonts.secondary.bold,
  }
})

export const Description = styled.Text<TextProps>((props) => {
  return {
    color: props.theme.colors.text.light,
    fontSize: props.bigHeader ? '18px' : '16px',
    lineHeight: '24px',
    fontFamily: props.theme.fonts.primary.medium,
    textAlign: props.align,
  }
})

export const Row = styled.View(() => {
  return {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: '16px',
  }
})
export const Column = styled.View(() => {
  return {}
})

export const Placeholder = styled.View(() => {
  return {
    height: '36px',
    width: '36px',
  }
})
