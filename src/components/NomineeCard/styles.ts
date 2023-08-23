import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.TouchableOpacity((props: StyledProps) => ({
  justifyContent: 'center',
  flexDirection: 'row',
}))

export const Content = styled.View((props: StyledProps) => ({
  marginLeft: props.theme.sizes.size9,
  flex: 1,
}))

export const Title = styled.Text((props: StyledProps) => ({
  fontSize: props.theme.typography.sizes.fontSize4,
  lineHeight: props.theme.typography.sizes.fontSize9,
  fontFamily: props.theme.typography.primary.bold,
  color: props.theme.palette.text.default,
}))

export const Information = styled.Text((props: StyledProps) => ({
  fontSize: props.theme.typography.sizes.fontSize3,
  lineHeight: props.theme.typography.sizes.fontSize7,
  fontFamily: props.theme.typography.primary.regular,
  color: props.theme.palette.text.light,
}))

export const Extra = styled.Text((props: StyledProps) => ({
  fontSize: props.theme.typography.sizes.fontSize3,
  lineHeight: props.theme.typography.sizes.fontSize7,
  fontFamily: props.theme.typography.primary.regular,
  color: props.theme.palette.primary.default,
}))
