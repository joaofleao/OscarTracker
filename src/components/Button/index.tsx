import React from 'react'

import Wrapper, { type MarginProps } from '../Wrapper'
import CustomButton, { type ButtonProps } from './Button'

const Button = (props: ButtonProps & MarginProps): JSX.Element => {
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
      <CustomButton {...rest} />
    </Wrapper>
  )
}

export default Button
