import { Global } from '../../components'
import ProgressBarComponent, { type ProgressBarProps } from './ProgressBar'

const ProgressBar = (props: ProgressBarProps & Global.WrapperProps): JSX.Element => {
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
      <ProgressBarComponent {...rest} />
    </Global.Wrapper>
  )
}

export default ProgressBar
export type { ProgressBarProps }
