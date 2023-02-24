import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

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
      fill='none'
      viewBox='0 0 40 40'>
      <Rect
        width='40'
        height='40'
        fill='#F5C518'
        rx='5'
      />
      <Path
        fill='#000'
        d='M7 15.164h2.796v10.762H7V15.164zM15.078 20.121l-.4-2.733a79.52 79.52 0 00-.335-2.294h-3.625v10.761h2.45l.008-7.105 1.03 7.105h1.744l.978-7.264.009 7.264h2.44V15.094h-3.651l-.648 5.027zM23.993 17.332c.03.138.046.449.046.935v4.173c0 .716-.046 1.154-.139 1.316-.093.162-.34.242-.742.242v-7.064c.305 0 .512.033.623.096.11.065.181.165.212.302zm1.263 8.413c.332-.072.611-.201.838-.384.226-.184.385-.438.476-.764.09-.324.145-.97.145-1.934v-3.78c0-1.018-.04-1.7-.102-2.047a1.936 1.936 0 00-.465-.946c-.25-.283-.612-.486-1.089-.61s-1.255-.186-2.608-.186h-2.086v10.761h3.387c.78-.024 1.282-.06 1.504-.11zM31.225 24.137c-.051.137-.277.206-.447.206-.167 0-.277-.066-.334-.199-.056-.132-.084-.434-.084-.907v-2.844c0-.49.025-.796.074-.918.05-.12.157-.182.324-.182.17 0 .399.07.457.208.059.14.088.436.088.892v2.757c-.018.567-.043.896-.078.987zm-3.558 1.624h2.517l.174-.685c.228.276.478.483.753.62.274.138.684.206 1.001.206.442 0 .823-.116 1.145-.348.32-.231.526-.506.613-.821.087-.316.13-.797.13-1.442v-3.02c0-.65-.015-1.073-.044-1.272a1.45 1.45 0 00-.257-.61 1.386 1.386 0 00-.622-.484 2.46 2.46 0 00-.963-.172c-.322 0-.734.064-1.008.19a2.22 2.22 0 00-.746.578V15h-2.693v10.761z'
      />
    </Svg>
  )
}
export default Google
