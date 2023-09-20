import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from './types'

function Pencil(props: Props): JSX.Element {
  const { color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M17.4912 3.00006C17.7539 2.73741 18.0657 2.52907 18.4088 2.38693C18.752 2.24479 19.1198 2.17163 19.4912 2.17163C19.8626 2.17163 20.2304 2.24479 20.5736 2.38693C20.9168 2.52907 21.2286 2.73741 21.4912 3.00006C21.7539 3.2627 21.9622 3.57451 22.1043 3.91767C22.2465 4.26083 22.3196 4.62862 22.3196 5.00006C22.3196 5.37149 22.2465 5.73929 22.1043 6.08245C21.9622 6.42561 21.7539 6.73741 21.4912 7.00006L7.99121 20.5001L2.49121 22.0001L3.99121 16.5001L17.4912 3.00006Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return linedSvg
}

export default Pencil
