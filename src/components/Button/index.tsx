import { Global } from '../../components'
import ButtonComponent, { type ButtonProps } from './Button'

const Button = (props: ButtonProps & Global.WrapperProps): JSX.Element => {
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
      <ButtonComponent {...rest} />
    </Global.Wrapper>
  )
}

export default Button
export type { ButtonProps }
