import { styled } from 'styled-components/native'

export const Header = styled.View((props) => {
  return {
    marginHorizontal: props.theme.sizes.size10,
    gap: props.theme.sizes.size7,
    flex: 1,
    justifyContent: 'center',
  }
})

export const Content = styled.View((props) => {
  return {
    marginHorizontal: props.theme.sizes.size10,
    flex: 1,
  }
})

export const Footer = styled.View((props) => {
  return {
    marginHorizontal: props.theme.sizes.size10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
})
