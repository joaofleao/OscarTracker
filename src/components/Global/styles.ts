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
