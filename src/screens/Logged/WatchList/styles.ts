import styled from 'styled-components/native'

export const List = styled.FlatList(() => {
  return {}
})
export const Item = styled.View(() => {
  return {
    marginHorizontal: '20px',
  }
})
export const FloatingButton = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.default,
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
