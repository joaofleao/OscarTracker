import styled from 'styled-components/native'

interface ImageProps {
  width: number
  height: number
}
export const Container = styled.View<ImageProps>((props) => {
  return {
    width: props.width,
    height: props.height,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: props.theme.radius.borderRadius4,
    backgroundColor: props.theme.palette.background.container,
  }
})

export const IconContainer = styled.View((props) => {
  return {
    position: 'absolute',
    backgroundColor: props.theme.palette.primary.default,
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: props.theme.radius.borderRadius4,
  }
})

export const Cover = styled.View<ImageProps>((props) => {
  return {
    position: 'absolute',
    borderRadius: props.theme.radius.borderRadius4,
    backgroundColor: props.theme.palette.background.container,
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width,
    height: props.height,
  }
})

export const Image = styled.Image((props) => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: props.theme.radius.borderRadius4,
  }
})
