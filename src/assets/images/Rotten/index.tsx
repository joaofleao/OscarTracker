import * as React from 'react'
import Svg, { Defs, G, Image, Path, Pattern } from 'react-native-svg'

type IconProps = React.ComponentProps<typeof Svg> & {
  width?: number
  height?: number
}

function Google({ width = 40, height = 40, ...rest }: IconProps) {
  return (
    <Svg
      {...rest}
      width={width}
      height={height}
      viewBox='0 0 138.75 141.25'>
      <G fill='#f93208'>
        <Path d='M20.154 40.829C-7.995 68.451 6.497 101.84 14.42 112.76c35.254 41.954 92.792 25.339 111.89-5.907 4.76-8.203 22.554-53.467-23.976-78.01z'></Path>
        <Path d='M39.613 39.265l4.778-8.86 28.406-5.04 11.119 9.21z'></Path>
      </G>
      <G>
        <Path
          fill='#02902e'
          d='M39.436 8.57l8.968-5.283 6.757 15.479c3.793-6.323 13.79-16.316 24.94-4.668-4.729 1.263-7.517 3.855-7.74 8.476 15.144-4.17 31.342 3.213 33.538 9.091C94.95 27.351 78.204 42.042 64.13 34c.008 15.045-12.618 16.636-19.903 17.076 2.077-4.996 5.591-9.994 1.474-14.987-7.618 8.171-13.874 10.668-33.17 4.668 4.876-1.679 14.843-11.39 24.448-11.425-6.775-2.467-12.29-2.087-17.814-1.475 2.917-3.96 12.15-15.197 28.625-8.476z'></Path>
      </G>
    </Svg>
  )
}
export default Google
