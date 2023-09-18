import styled from 'styled-components/native'

type ContainerProps = {
  large: boolean
}

export const Container = styled.Pressable<ContainerProps>((props) => {
  return {
    width: props.large ? '158px' : '106px',
    gap: '8px',
  }
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.text.default,
    fontSize: '16px',
  }
})
