import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

import { defaultValues, Props } from './types'

function EyeOff(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <G clipPath="url(#clip0_1968_2372)">
        <Path
          d="M18.4312 17.94C16.7218 19.243 14.6403 19.9649 12.4912 20C5.49121 20 1.49121 12 1.49121 12C2.7351 9.68192 4.46035 7.65663 6.55121 6.06003M10.3912 4.24002C11.0795 4.0789 11.7843 3.99836 12.4912 4.00003C19.4912 4.00003 23.4912 12 23.4912 12C22.8842 13.1356 22.1603 14.2048 21.3312 15.19M14.6112 14.12C14.3366 14.4148 14.0054 14.6512 13.6374 14.8151C13.2694 14.9791 12.8721 15.0673 12.4693 15.0744C12.0665 15.0815 11.6664 15.0074 11.2928 14.8565C10.9193 14.7056 10.5799 14.4811 10.2951 14.1962C10.0102 13.9113 9.7856 13.572 9.63472 13.1984C9.48384 12.8249 9.40974 12.4247 9.41684 12.0219C9.42395 11.6191 9.51212 11.2219 9.67609 10.8539C9.84006 10.4859 10.0765 10.1547 10.3712 9.88003"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.49121 1L23.4912 23"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1968_2372">
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

export default EyeOff
