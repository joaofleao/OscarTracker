import styled from 'styled-components/native'

interface ImageProps {
  width: number | string
  height: number | string
  winner: boolean
}
export const Container = styled.View<ImageProps>((props) => {
  return {
    width: props.width,
    height: props.height,

    alignItems: props.winner ? 'flex-end' : 'center',
    justifyContent: props.winner ? 'flex-end' : 'center',

    borderRadius: '12px',
    backgroundColor: props.theme.colors.background.container,
    aspectRatio: 0.67,
  }
})

export const WinnerCover = styled.View(() => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
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

interface IconContainerProps {
  size: 'small' | 'full' | 'large'
  winner: boolean
}

export const IconContainer = styled.View<IconContainerProps>((props) => {
  return {
    position: 'absolute',
    bottom: props.size === 'large' ? 12 : 8,
    right: props.size === 'large' ? 12 : 8,
    backgroundColor: props.theme.colors.background.container,
    padding: props.size === 'full' ? 16 : 8,
    borderRadius: props.size === 'small' ? 8 : 12,

    shadowColor: '#000',
    shadowOpacity: '0.33',
    shadowRadius: '4px',
    elevation: '6',
  }
})

interface CoverProps {
  winner: boolean
  height: number | string
  width: number | string
}

export const Cover = styled.View<CoverProps>((props) => {
  return {
    position: 'absolute',
    borderRadius: '12px',
    backgroundColor: 'rgba(0,0,0,.6)',

    ...(props.winner && {
      borderColor: props.theme.colors.primary.default,
      borderWidth: '2px',
      borderStyle: 'solid',
    }),
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
