import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Clock(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M12.1824 22.6812C17.7052 22.6812 22.1824 18.204 22.1824 12.6812C22.1824 7.1583 17.7052 2.68115 12.1824 2.68115C6.65953 2.68115 2.18237 7.1583 2.18237 12.6812C2.18237 18.204 6.65953 22.6812 12.1824 22.6812Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1824 6.68115V12.6812L16.1824 14.6812"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return linedSvg
}

export default Clock
