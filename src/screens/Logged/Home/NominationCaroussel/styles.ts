import styled from 'styled-components/native'

export const Header = styled.View(() => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
    fontSize: '20px',
    lineHeight: '28px',
    flex: 1,
  }
})

export const List = styled.FlatList(() => {
  return {
    marginHorizontal: '-20px',
  }
})

export const Caroussel = styled.View(() => {
  return {
    marginHorizontal: '20px',
    gap: '20px',
  }
})
