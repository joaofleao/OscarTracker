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
    backgroundColor: props.theme.palette.background.container,
    padding: '24px',
    width: '90%',
    gap: '16px',
  }
})

export const Row = styled.View(() => {
  return {
    gap: '8px',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  }
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '20px',
    lineHeight: '24px',
  }
})

export const Description = styled.Text((props) => {
  return {
    color: props.theme.palette.text.disabled,
    fontFamily: props.theme.typography.primary.medium,
    fontSize: '16px',
    lineHeight: '18px',
  }
})

export const Section = styled.View(() => {
  return {
    gap: '8px',
  }
})
