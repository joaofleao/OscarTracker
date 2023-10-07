import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Oscar(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M10.552 5.688c.405.27.892.427 1.415.427.524 0 1.01-.157 1.416-.427m-2.83 0a2.558 2.558 0 112.83 0m-2.83 0l-.715.207A2.483 2.483 0 008.044 8.28v2.169c0 .704.204 1.394.587 1.985v0c.332.514.53 1.102.576 1.712l.332 4.417a1.171 1.171 0 01-1.168 1.259v0c-.647 0-1.171.524-1.171 1.17v.419c0 .877.711 1.589 1.59 1.589h6.356a1.59 1.59 0 001.589-1.59v-.417c0-.647-.524-1.171-1.171-1.171v0c-.681 0-1.219-.58-1.168-1.26l.332-4.416c.046-.61.244-1.198.576-1.712v0a3.654 3.654 0 00.587-1.985V8.28a2.483 2.483 0 00-1.794-2.385l-.714-.207"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M11.967 6.115c-.523 0-1.01-.157-1.415-.427l-.714.207A2.483 2.483 0 008.044 8.28v2.169c0 .704.204 1.394.587 1.985.332.514.53 1.102.576 1.712l.332 4.417a1.171 1.171 0 01-1.168 1.259c-.647 0-1.171.524-1.171 1.17v.419c0 .877.711 1.589 1.59 1.589h6.356a1.59 1.59 0 001.589-1.59v-.417c0-.647-.524-1.171-1.171-1.171-.681 0-1.219-.58-1.168-1.26l.332-4.416c.046-.61.244-1.198.576-1.712a3.654 3.654 0 00.587-1.985V8.28a2.483 2.483 0 00-1.794-2.385l-.714-.207c-.405.27-.892.427-1.416.427z"
        fill={color}
      />
      <Path
        d="M11.967 1a2.558 2.558 0 100 5.115 2.558 2.558 0 000-5.115z"
        fill={color}
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default Oscar
