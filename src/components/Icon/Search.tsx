import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Search(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M11.1787 19.5588C15.597 19.5588 19.1787 15.9771 19.1787 11.5588C19.1787 7.14056 15.597 3.55884 11.1787 3.55884C6.76043 3.55884 3.17871 7.14056 3.17871 11.5588C3.17871 15.9771 6.76043 19.5588 11.1787 19.5588Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.1786 21.5587L16.8286 17.2087"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return linedSvg
}

export default Search
