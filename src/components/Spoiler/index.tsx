import { Global } from '../../components'
import SpoilerComponent, { type SpoilerProps } from './Spoiler'

const Spoiler = (props: SpoilerProps & Global.WrapperProps): JSX.Element => {
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
      <SpoilerComponent {...rest} />
    </Global.Wrapper>
  )
}

export default Spoiler
export type { SpoilerProps }
