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
    borderRadius: '12px',
    backgroundColor: props.theme.colors.background.container,
  }
})

export const IconContainer = styled.View((props) => {
  return {
    position: 'absolute',
    backgroundColor: props.theme.colors.primary.default,
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
  }
})

export const Cover = styled.View<ImageProps>((props) => {
  return {
    position: 'absolute',
    borderRadius: '12px',
    backgroundColor: props.theme.colors.background.container,
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width,
    height: props.height,
  }
})

export const Image = styled.Image(() => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
  }
})
