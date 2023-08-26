import { Global } from '../../components'
import SocialButtonComponent, { type SocialButtonProps } from './SocialButton'

const SocialButton = (props: SocialButtonProps & Global.WrapperProps): JSX.Element => {
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
      <SocialButtonComponent {...rest} />
    </Global.Wrapper>
  )
}

export default SocialButton
export type { SocialButtonProps }
