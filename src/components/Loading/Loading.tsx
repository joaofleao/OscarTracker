import LottieView from 'lottie-react-native'

import { getAnimation, getColorPrimary, getColorSecondary, getSpeed } from './utils'
import { useTheme } from '@features/theme'

export interface LoadingProps {
  animation?: 'dots' | 'movie' | 'circle'
  size?: number
  disabled?: boolean
  type?: 'primary' | 'secondary'
}

const defaultValue = {
  animation: 'dots',
  size: 120,
  type: 'primary',
  disabled: false,
}

const Loading = (propArgs: LoadingProps): JSX.Element => {
  const { animation, size, type, disabled } = { ...defaultValue, ...propArgs }

  const render = getAnimation(animation)
  const speed = getSpeed(animation)
  const theme = useTheme()

  const colorPrimary = getColorPrimary(type, disabled, theme)
  const colorSecondary = getColorSecondary(type, disabled, theme)

  return (
    <LottieView
      style={{ width: size, height: size }}
      autoPlay={true}
      source={render}
      speed={speed}
      loop={true}
      colorFilters={[
        { keypath: 'Wheel', color: colorPrimary },
        { keypath: 'WheelHole', color: colorSecondary },
        { keypath: 'Circle', color: colorPrimary },
        { keypath: 'Dot', color: colorPrimary },
      ]}
    />
  )
}

export default Loading
