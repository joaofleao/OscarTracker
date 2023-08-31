import { styled } from 'styled-components/native'

export const Header = styled.View(() => {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  }
})

export const Content = styled.View((props) => {
  return {
    flex: 2,
    gap: props.theme.sizes.size10,
    marginHorizontal: props.theme.sizes.size10,
  }
})

export const Footer = styled.View((props) => {
  return {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    gap: props.theme.sizes.size8,
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
    fontSize: props.theme.typography.sizes.fontSize1,
    color: props.theme.palette.primary.default,
  }
})
export const ForgotButton = styled.TouchableOpacity((props) => {
  return {
    padding: props.theme.sizes.size7,
  }
})
