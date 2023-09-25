import { AnimationObject } from 'lottie-react-native'

import { circle, dots, movie } from '@assets/animations'
import type { ThemeType } from '@types'

export const getAnimation = (animation: string): AnimationObject => {
  if (animation === 'movie') return movie
  if (animation === 'circle') return circle
  return dots
}

export const getSpeed = (animation: string): number => {
  if (animation === 'movie') return 0.5
  if (animation === 'circle') return 1.5
  return 1
}

export const getColorPrimary = (type: string, disabled: boolean, theme: ThemeType): string => {
  if (type === 'primary') {
    if (disabled) return theme.colors.primary.shades.shade30
    else return theme.colors.primary.default
  }
  return theme.colors.text.inverse
}

export const getColorSecondary = (type: string, disabled: boolean, theme: ThemeType): string => {
  if (type === 'primary') {
    return theme.colors.text.inverse
  }
  if (disabled) return theme.colors.primary.shades.shade30
  return theme.colors.primary.default
}
