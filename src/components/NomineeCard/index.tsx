import React from 'react'

import Wrapper, { type WrapperProps } from '../Wrapper'
import NomineeCardComponent, { type NomineeCardProps } from './NomineeCard'

const NomineeCard = (props: NomineeCardProps & WrapperProps): JSX.Element => {
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
      <NomineeCardComponent {...rest} />
    </Wrapper>
  )
}

export default NomineeCard
export type { NomineeCardProps }
