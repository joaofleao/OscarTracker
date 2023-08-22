import React from 'react'

import Wrapper, { type WrapperProps } from '../Wrapper'
import LogoComponent from './Logo'

const Logo = (props: WrapperProps): JSX.Element => {
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
      <LogoComponent {...rest} />
    </Wrapper>
  )
}

export default Logo
