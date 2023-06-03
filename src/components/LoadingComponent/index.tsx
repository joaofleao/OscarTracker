import React from 'react'
import LottieView from 'lottie-react-native'
import { useTheme } from 'styled-components/native'

import type { ThemeType } from '../../types'
import { getAnimation, getColorPrimary, getColorSecondary, getSpeed } from './utils'

interface Props {
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

const LoadingComponent = (propArgs: Props): JSX.Element => {
  const { animation, size, type, disabled } = { ...defaultValue, ...propArgs }

  const render = getAnimation(animation)
  const speed = getSpeed(animation)
  const theme = useTheme() as ThemeType

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

export default LoadingComponent
