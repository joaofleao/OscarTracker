import Svg from 'react-native-svg'

import { defaultValues, Props } from './types'

function Placeholder(props: Props): JSX.Element {
  const { ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    />
  )

  return linedSvg
}

export default Placeholder
