import React from 'react'

import Wrapper, { type WrapperProps } from '../Wrapper'
import ButtonComponent, { type ButtonProps } from './Button'

const Button = (props: ButtonProps & WrapperProps): JSX.Element => {
  const { mt, mv, mh, mb, mr, ml, ...rest } = props
  return (
    <Wrapper
      mt={mt}
      mv={mv}
      mh={mh}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      <ButtonComponent {...rest} />
    </Wrapper>
  )
}

export default Button
export type { ButtonProps }
