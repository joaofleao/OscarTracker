import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Star(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M12.4912 2L15.5812 8.26L22.4912 9.27L17.4912 14.14L18.6712 21.02L12.4912 17.77L6.31121 21.02L7.49121 14.14L2.49121 9.27L9.40121 8.26L12.4912 2Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return linedSvg
}

export default Star
