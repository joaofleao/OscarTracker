import styled from 'styled-components/native'

export const Container = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.default,
    flex: 1,
  }
})
