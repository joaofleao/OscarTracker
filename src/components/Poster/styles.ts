import styled from 'styled-components/native'

import IconComponent from '../../assets/icons'
import type { StyledProps } from '../../types'

interface ImageProps extends StyledProps {
  width: number
  height: number
}
export const Container = styled.View((props: ImageProps) => {
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

export const Icon = styled(IconComponent)((props: StyledProps) => {
  return {
    color: props.theme.palette.text.inverse,
  }
})

export const IconContainer = styled.View((props: StyledProps) => {
  return {
    position: 'absolute',
    backgroundColor: props.theme.palette.primary.default,
    padding: props.theme.sizes.size5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: props.theme.radius.borderRadius4,
  }
})

export const Cover = styled.View((props: ImageProps) => {
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

export const Image = styled.Image((props: StyledProps) => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: props.theme.radius.borderRadius4,
  }
})
