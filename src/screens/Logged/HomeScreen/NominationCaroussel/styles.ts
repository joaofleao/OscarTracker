import styled from 'styled-components/native'

export const Header = styled.View(() => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '16px',
    marginBottom: '16px',
  }
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.text.default,
    fontSize: '20px',
    lineHeight: '28px',
    flex: 1,
  }
})
