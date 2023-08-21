import styled from 'styled-components/native'

interface Props {
  mt: string
  mb: string
  mr: string
  ml: string

  mv: string
  mh: string
}

export const Wrapper = styled.View((props: Props) => ({
  marginLeft: props.mh ?? props.ml,
  marginRight: props.mh ?? props.ml,
  marginTop: props.mv ?? props.mt,
  marginBottom: props.mv ?? props.mb,
}))
