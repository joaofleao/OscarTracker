import { Global } from '../../components'
import LogoComponent from './Logo'

const Logo = (props: Global.WrapperProps): JSX.Element => {
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
      <LogoComponent {...rest} />
    </Global.Wrapper>
  )
}

export default Logo
