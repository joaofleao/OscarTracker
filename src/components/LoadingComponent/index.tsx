import React from 'react'
import LottieView from 'lottie-react-native'
import { useTheme } from 'styled-components'

import { circle, dots, movie } from '../../assets/animations'
import { type ThemeType } from '../../types'

interface LoadingComponentProps {
  animation?: string
  size?: number
  disabled?: boolean
  type?: 'primary' | 'secondary'
}

const getAnimation = (animation: string): any => {
  if (animation === 'movie') return movie
  if (animation === 'circle') return circle
  return dots
}

const getSpeed = (animation: string): number => {
  if (animation === 'movie') return 0.5
  if (animation === 'circle') return 1.5
  return 1
}

const getColorPrimary = (type: string, disabled: boolean, theme: ThemeType): string => {
  if (type === 'primary') {
    if (disabled) return theme.palette.primary.shades.shade30
    else return theme.palette.primary.default
  }
  return theme.palette.text.inverse
}

const getColorSecondary = (type: string, disabled: boolean, theme: ThemeType): string => {
  if (type === 'primary') {
    return theme.palette.text.inverse
  }
  if (disabled) return theme.palette.primary.shades.shade30
  return theme.palette.primary.default
}

const LoadingComponent = ({ animation = 'dots', size, type = 'primary', disabled = false }: LoadingComponentProps): JSX.Element => {
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

        { keypath: "Wheel", color: colorPrimary },
        { keypath: "WheelHole", color: colorSecondary },

        { keypath: "Circle", color: colorPrimary },

        { keypath: "Dot", color: colorPrimary },

      ]}
    />
  )
}

export default LoadingComponent
