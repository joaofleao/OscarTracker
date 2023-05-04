import type { PaletteType, SimplifiedPaletteType } from '../styles/colors'
import type { ModeType } from '../types'

export const getRgba = (hexadecimal: string, alpha: number): string => {
  hexadecimal = hexadecimal.toUpperCase()

  const alphaString = alpha.toFixed(3).toString()
  const red: number = parseInt(hexadecimal.substring(1, 3), 16)
  const green: number = parseInt(hexadecimal.substring(3, 5), 16)
  const blue: number = parseInt(hexadecimal.substring(5, 7), 16)

  const color = `rgba(${red}, ${green}, ${blue}, ${alphaString})`
  return color
}

export const getPalette = (mode: ModeType, palette: PaletteType): SimplifiedPaletteType => {
  const colorPalette = {
    primary: {
      default: getRgba(palette.primary.default[mode], palette.primary.default.alpha),
      hover: getRgba(palette.primary.hover[mode], palette.primary.hover.alpha),
      active: getRgba(palette.primary.active[mode], palette.primary.active.alpha),
      shades: {
        shade5: getRgba(palette.primary.shades.shade5[mode], palette.primary.shades.shade5.alpha),
        shade10: getRgba(palette.primary.shades.shade10[mode], palette.primary.shades.shade10.alpha),
        shade15: getRgba(palette.primary.shades.shade15[mode], palette.primary.shades.shade15.alpha),
        shade30: getRgba(palette.primary.shades.shade30[mode], palette.primary.shades.shade30.alpha),
        shade60: getRgba(palette.primary.shades.shade60[mode], palette.primary.shades.shade60.alpha),
        shade90: getRgba(palette.primary.shades.shade90[mode], palette.primary.shades.shade90.alpha),
      },
    },
    stroke: {
      default: getRgba(palette.stroke.default[mode], palette.stroke.default.alpha),
    },
    background: {
      default: getRgba(palette.background.default[mode], palette.background.default.alpha),
      container: getRgba(palette.background.container[mode], palette.background.container.alpha),
      foreground: getRgba(palette.background.foreground[mode], palette.background.foreground.alpha),
      disabled: getRgba(palette.background.disabled[mode], palette.background.disabled.alpha),
    },
    text: {
      default: getRgba(palette.text.default[mode], palette.text.default.alpha),
      light: getRgba(palette.text.light[mode], palette.text.light.alpha),
      medium: getRgba(palette.text.medium[mode], palette.text.medium.alpha),
      inverse: getRgba(palette.text.inverse[mode], palette.text.inverse.alpha),
      disabled: getRgba(palette.text.disabled[mode], palette.text.disabled.alpha),
    },
    neutral: {
      default: getRgba(palette.neutral.default[mode], palette.neutral.default.alpha),
      hover: getRgba(palette.neutral.hover[mode], palette.neutral.hover.alpha),
      active: getRgba(palette.neutral.active[mode], palette.neutral.active.alpha),
      background: {
        default: getRgba(palette.neutral.background.default[mode], palette.neutral.background.default.alpha),
        light: getRgba(palette.neutral.background.light[mode], palette.neutral.background.light.alpha),
        dark: getRgba(palette.neutral.background.dark[mode], palette.neutral.background.dark.alpha),
      },
    },
    positive: {
      default: getRgba(palette.positive.default[mode], palette.positive.default.alpha),
      hover: getRgba(palette.positive.hover[mode], palette.positive.hover.alpha),
      active: getRgba(palette.positive.active[mode], palette.positive.active.alpha),
      background: {
        default: getRgba(palette.positive.background.default[mode], palette.positive.background.default.alpha),
        light: getRgba(palette.positive.background.light[mode], palette.positive.background.light.alpha),
        dark: getRgba(palette.positive.background.dark[mode], palette.positive.background.dark.alpha),
      },
    },
    warning: {
      default: getRgba(palette.warning.default[mode], palette.warning.default.alpha),
      hover: getRgba(palette.warning.hover[mode], palette.warning.hover.alpha),
      active: getRgba(palette.warning.active[mode], palette.warning.active.alpha),
      background: {
        default: getRgba(palette.warning.background.default[mode], palette.warning.background.default.alpha),
        light: getRgba(palette.warning.background.light[mode], palette.warning.background.light.alpha),
        dark: getRgba(palette.warning.background.dark[mode], palette.warning.background.dark.alpha),
      },
    },
    negative: {
      default: getRgba(palette.negative.default[mode], palette.negative.default.alpha),
      hover: getRgba(palette.negative.hover[mode], palette.negative.hover.alpha),
      active: getRgba(palette.negative.active[mode], palette.negative.active.alpha),
      background: {
        default: getRgba(palette.negative.background.default[mode], palette.negative.background.default.alpha),
        light: getRgba(palette.negative.background.light[mode], palette.negative.background.light.alpha),
        dark: getRgba(palette.negative.background.dark[mode], palette.negative.background.dark.alpha),
      },
    },
  }

  return colorPalette
}
