import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.TouchableOpacity((props: StyledProps) => {
  return {
    height: props.theme.sizes.size15,
    width: props.theme.sizes.size15,
  }
})
