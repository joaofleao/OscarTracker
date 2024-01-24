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
    position: 'absolute',
    alignSelf: 'center',
    bottom: 132,
    backgroundColor: props.theme.colors.background.default,
    zIndex: 1,
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
