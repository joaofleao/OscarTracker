import styled from 'styled-components/native'

export const Content = styled.FlatList(() => {
  return {
    paddingHorizontal: '20px',
    flex: 1,
  }
})
export const Accent = styled.Text((props) => {
  return {
    color: props.theme.colors.primary.default,
    fontFamily: props.theme.fonts.primary.bold,
  }
})
