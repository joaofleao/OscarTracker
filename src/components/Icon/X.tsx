import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function AlertCircle(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M18.3242 6.64673L6.32422 18.6467"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.32422 6.64673L18.3242 18.6467"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return linedSvg
}

export default AlertCircle
