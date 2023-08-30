import { styled } from 'styled-components/native'

import { StyledProps } from '../../types'

interface Props extends StyledProps {
  align?: 'center' | 'left' | 'right' | 'between'
}

export const Container = styled.View((props: Props) => {
  const getAlignment = (): string => {
    if (props.align === 'between') return 'space-between'
    if (props.align === 'center') return 'center'
    if (props.align === 'right') return 'flex-end'
    return 'flex-start'
  }
  return {
    flexDirection: 'row',
    gap: props.theme.sizes.size10,

    justifyContent: getAlignment(),
    marginHorizontal: props.theme.sizes.size10,
    marginTop: props.theme.sizes.size6,
    marginBottom: props.theme.sizes.size10,
  }
})
