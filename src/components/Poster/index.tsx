import React from 'react'

import { Global } from '../../components'
import PosterComponent, { type PosterProps } from './Poster'

const Poster = (props: PosterProps & Global.WrapperProps): JSX.Element => {
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
      <PosterComponent {...rest} />
    </Global.Wrapper>
  )
}

export default Poster
export type { PosterProps }
