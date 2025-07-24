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
        d="M12.4911 22C18.0139 22 22.4911 17.5228 22.4911 12C22.4911 6.47715 18.0139 2 12.4911 2C6.96824 2 2.49109 6.47715 2.49109 12C2.49109 17.5228 6.96824 22 12.4911 22Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.4911 8V12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.4911 16H12.5011"
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
