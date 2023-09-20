import styled from 'styled-components/native'

export const Container = styled.View({
  flexDirection: 'row',
  gap: '20px',
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontSize: '36px',
    fontFamily: props.theme.fonts.primary.regular,
    alignSelf: 'flex-start',
    marginVertical: '2px',
  }
})
