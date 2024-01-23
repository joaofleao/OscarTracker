import styled from 'styled-components/native'

interface ImageProps {
  width: number
  height: number
  winner: boolean
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
    ...(props.winner && {
      borderColor: props.theme.colors.primary.default,
      borderWidth: '2px',
      borderStyle: 'solid',
    }),
  }
})

interface WinnerCoverProps {
  blur: boolean
}

export const WinnerCover = styled.View<WinnerCoverProps>((props) => {
  return {
    backgroundColor: props.blur && props.theme.colors.background.backdrop,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

interface WinnerProps {
  large: boolean
}

export const WinnerTitle = styled.Text<WinnerProps>((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
    fontSize: props.large ? '18px' : '14px',
  }
})
export const WinnerDescription = styled.Text<WinnerProps>((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.primary.default,
    fontSize: props.large ? '14px' : '12px',
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
