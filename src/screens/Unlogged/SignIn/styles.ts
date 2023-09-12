import { styled } from 'styled-components/native'

export const Header = styled.View(() => {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  }
})

export const Content = styled.View(() => {
  return {
    flex: 2,
    gap: '28px',
    marginHorizontal: '20px',
  }
})

export const Footer = styled.View(() => {
  return {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    gap: '14px',
  }
})

export const ButtonContainer = styled.View(() => {
  return {
    alignItems: 'center',
  }
})

export const ForgotLabel = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '12px',
    color: props.theme.palette.primary.default,
  }
})

export const ForgotButton = styled.TouchableOpacity(() => {
  return {
    padding: '12px',
  }
})
