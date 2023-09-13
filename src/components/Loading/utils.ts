import { circle, dots, movie } from '@assets/animations'
import type { ThemeType } from '@types'

export const getAnimation = (animation: string): unknown => {
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
    if (disabled) return theme.palette.primary.shades.shade30
    else return theme.palette.primary.default
  }
  return theme.palette.text.inverse
}

export const getColorSecondary = (type: string, disabled: boolean, theme: ThemeType): string => {
  if (type === 'primary') {
    return theme.palette.text.inverse
  }
  if (disabled) return theme.palette.primary.shades.shade30
  return theme.palette.primary.default
}
