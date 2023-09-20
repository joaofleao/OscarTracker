import styled from 'styled-components/native'

export const Container = styled.View((props) => {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: props.theme.colors.background.default,
  }
})

export const Description = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '20px',
    marginTop: '8px',
  }
})
