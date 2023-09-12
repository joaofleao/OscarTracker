import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity({
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
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.text.default,
  }
})

export const Information = styled.Text((props) => {
  return {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: props.theme.typography.primary.regular,
    color: props.theme.palette.text.light,
  }
})

export const Extra = styled.Text((props) => {
  return {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: props.theme.typography.primary.regular,
    color: props.theme.palette.primary.default,
  }
})
