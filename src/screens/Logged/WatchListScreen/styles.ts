import styled from 'styled-components/native'

export const Content = styled.View(() => {
  return {
    paddingHorizontal: '20px',
    gap: '16px',
    flex: 1,
  }
})
export const List = styled.FlatList(() => {
  return {
    marginHorizontal: '-20px',
  }
})
