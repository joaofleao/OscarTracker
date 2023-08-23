import React from 'react'

import Wrapper, { type WrapperProps } from '../Wrapper'
import Postert, { type PosterProps } from './Poster'

const Poster = (props: PosterProps & WrapperProps): JSX.Element => {
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
      <Postert {...rest} />
    </Wrapper>
  )
}

export default Poster
export type { PosterProps }
