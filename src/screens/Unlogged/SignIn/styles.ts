import { styled } from 'styled-components/native'

export const Background = styled.View((props) => {
  return {
    backgroundColor: props.theme.palette.background.backdrop,
    padding: props.theme.sizes.size0,

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})
