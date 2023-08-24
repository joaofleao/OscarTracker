import React from 'react'

import { Global } from '../../components'
import InputComponent, { type InputProps } from './Input'

const Input = (props: InputProps & Global.WrapperProps): JSX.Element => {
  const { mt, mv, mh, mb, mr, ml, ...rest } = props
  return (
    <Global.Wrapper
      mt={mt}
      mv={mv}
      mh={mh}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      <InputComponent {...rest} />
    </Global.Wrapper>
  )
}

export default Input
export type { InputProps }
