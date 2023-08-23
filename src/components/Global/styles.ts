import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Screen = styled.SafeAreaView((props: StyledProps) => ({
  backgroundColor: props.theme.palette.background.default,
  flex: 1,
}))

export interface WrapperProps {
  mt?: string
  mb?: string
  mr?: string
  ml?: string

  mv?: string
  mh?: string
}

export const Wrapper = styled.View((props: WrapperProps) => ({
  marginLeft: props.ml ?? props.mh ?? '0px',
  marginRight: props.mr ?? props.mh ?? '0px',
  marginTop: props.mt ?? props.mv ?? '0px',
  marginBottom: props.mb ?? props.mv ?? '0px',
}))

export const Separator = styled.View((props: StyledProps) => ({
  width: props.theme.sizes.size10,
  height: props.theme.sizes.size10,
}))
