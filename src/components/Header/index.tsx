import React from 'react'

import Wrapper, { type WrapperProps } from '../Wrapper'
import HeaderComponent, { type HeaderProps } from './Header'

const Header = (props: HeaderProps & WrapperProps): JSX.Element => {
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
      <HeaderComponent {...rest} />
    </Wrapper>
  )
}

export default Header
export type { HeaderComponent }
