import { styled } from 'styled-components/native'

export const Background = styled.Pressable(() => {
  return {
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})

export const Container = styled.View((props) => {
  return {
    maxHeight: '80%',
    borderRadius: '24px',
    backgroundColor: props.theme.colors.background.container,
    padding: '24px',
    width: '90%',
    gap: '16px',
  }
})

export const Row = styled.View(() => {
  return {
    gap: '16px',
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export const Footer = styled.View(() => {
  return {
    gap: '20px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '20px',
  }
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '20px',
    lineHeight: '24px',
  }
})

export const Description = styled.Text((props) => {
  return {
    color: props.theme.colors.text.disabled,
    fontFamily: props.theme.fonts.primary.medium,
    fontSize: '14px',
    lineHeight: '20px',
  }
})

export const Section = styled.View(() => {
  return {
    gap: '8px',
  }
})
