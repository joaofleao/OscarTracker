import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.View({
  flexDirection: 'row',
  alignSelf: 'flex-start',
})

export const Title = styled.Text((props: StyledProps) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.theme.typography.sizes.fontSize11,
    fontFamily: props.theme.typography.primary.regular,
    alignSelf: 'flex-start',
    marginVertical: props.theme.sizes.size2,
  }
})

export const Texts = styled.View((props: StyledProps) => {
  return {
    marginLeft: props.theme.sizes.size6,
    padding: props.theme.sizes.size6,
  }
})
