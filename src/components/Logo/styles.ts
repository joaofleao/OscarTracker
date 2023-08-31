import styled from 'styled-components/native'

export const Container = styled.View((props) => {
  return {
    flexDirection: 'row',
    gap: props.theme.sizes.size10,
  }
})

export const Title = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.theme.typography.sizes.fontSize11,
    fontFamily: props.theme.typography.primary.regular,
    alignSelf: 'flex-start',
    marginVertical: props.theme.sizes.size2,
  }
})
