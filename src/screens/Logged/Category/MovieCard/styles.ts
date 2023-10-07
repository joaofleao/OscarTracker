import styled from 'styled-components/native'

export const Container = styled.Pressable({
  justifyContent: 'center',
  flexDirection: 'row',
})

export const Content = styled.View({
  marginLeft: '16px',
  flex: 1,
})

export const Title = styled.Text((props) => {
  return {
    fontSize: '18px',
    lineHeight: '28px',
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
  }
})

export const Information = styled.Text((props) => {
  return {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: props.theme.fonts.primary.regular,
    color: props.theme.colors.text.light,
  }
})

export const Extra = styled.Text((props) => {
  return {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: props.theme.fonts.primary.regular,
    color: props.theme.colors.primary.default,
  }
})
