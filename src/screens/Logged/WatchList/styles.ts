import styled from 'styled-components/native'

export const List = styled.FlatList(() => {
  return {
    paddingHorizontal: '20px',
  }
})
export const Header = styled.View(() => {
  return {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 12,
  }
})
