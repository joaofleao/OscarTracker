import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Person(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6318 18.4834C21.6318 15.989 17.3266 13.9669 12.0159 13.9669C6.70521 13.9669 2.40002 15.989 2.40002 18.4834C2.40002 20.9779 2.40002 23 12.0159 23C21.6318 23 21.6318 20.9779 21.6318 18.4834ZM12.0159 15.9742C16.5708 15.9742 19.6074 17.5995 19.6074 18.9853C19.6074 20.9926 15.5586 20.9926 12.0159 20.9926C8.47322 20.9926 4.42442 20.9926 4.42442 18.9853C4.42442 17.5995 7.46102 15.9742 12.0159 15.9742Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0159 12.2185C15.4759 12.2185 18.2808 9.70719 18.2808 6.60927C18.2808 3.51136 15.4759 1 12.0159 1C8.55591 1 5.75102 3.51136 5.75102 6.60927C5.75102 9.70719 8.55591 12.2185 12.0159 12.2185ZM12.0159 10.2641C14.3434 10.2641 16.2301 8.62777 16.2301 6.60927C16.2301 4.59077 14.3434 2.95445 12.0159 2.95445C9.68848 2.95445 7.80172 4.59077 7.80172 6.60927C7.80172 8.62777 9.68848 10.2641 12.0159 10.2641Z"
        fill={color}
      />
    </Svg>
  )

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6318 18.4834C21.6318 15.989 17.3266 13.9669 12.0159 13.9669C6.70521 13.9669 2.40002 15.989 2.40002 18.4834C2.40002 20.9779 2.40002 23 12.0159 23C21.6318 23 21.6318 20.9779 21.6318 18.4834Z"
        fill={color}
      />
      <Path
        d="M18.2808 6.60927C18.2808 9.70719 15.4759 12.2185 12.0159 12.2185C8.55591 12.2185 5.75102 9.70719 5.75102 6.60927C5.75102 3.51136 8.55591 1 12.0159 1C15.4759 1 18.2808 3.51136 18.2808 6.60927Z"
        fill={color}
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default Person
