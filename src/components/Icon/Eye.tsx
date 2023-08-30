import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Eye(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <G clipPath="url(#clip0_1968_2369)">
        <Path
          d="M1.49121 12C1.49121 12 5.49121 4 12.4912 4C19.4912 4 23.4912 12 23.4912 12C23.4912 12 19.4912 20 12.4912 20C5.49121 20 1.49121 12 1.49121 12Z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.4912 15C14.1481 15 15.4912 13.6569 15.4912 12C15.4912 10.3431 14.1481 9 12.4912 9C10.8344 9 9.49121 10.3431 9.49121 12C9.49121 13.6569 10.8344 15 12.4912 15Z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1968_2369">
          <Rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.491211)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )

  return linedSvg
}

export default Eye
