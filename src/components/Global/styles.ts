import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Screen = styled.SafeAreaView((props: StyledProps) => {
  return {
    backgroundColor: props.theme.palette.background.default,
    flex: 1,
  }
})

export const Separator = styled.View((props: StyledProps) => {
  return {
    width: props.theme.sizes.size10,
    height: props.theme.sizes.size10,
  }
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: props.theme.typography.sizes.fontSize7,
    color: props.theme.palette.text.default,
    letterSpacing: '1.5px',
  }
})

export const Description = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.regular,
    fontSize: props.theme.typography.sizes.fontSize4,
    color: props.theme.palette.text.default,
    letterSpacing: '1px',
  }
})
