import styled from 'styled-components/native'

export const Container = styled.View({
  flexDirection: 'row',
  gap: '20px',
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: '36px',
    fontFamily: props.theme.typography.primary.regular,
    alignSelf: 'flex-start',
    marginVertical: '2px',
  }
})
