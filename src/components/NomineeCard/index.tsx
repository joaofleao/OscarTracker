import React from 'react'

import { Global } from '../../components'
import NomineeCardComponent, { type NomineeCardProps } from './NomineeCard'

const NomineeCard = (props: NomineeCardProps & Global.WrapperProps): JSX.Element => {
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
      <NomineeCardComponent {...rest} />
    </Global.Wrapper>
  )
}

export default NomineeCard
export type { NomineeCardProps }
