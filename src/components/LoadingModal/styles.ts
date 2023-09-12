import styled from 'styled-components/native'

export const Container = styled.View((props) => {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: props.theme.palette.background.default,
  }
})

export const Description = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '20px',
    marginTop: '8px',
  }
})
