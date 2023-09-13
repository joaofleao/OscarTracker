import type { PaletteType, SimplifiedPaletteType } from './colors'
import type { ModeType } from '@types'

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
        shade10: getRgba(
          palette.primary.shades.shade10[mode],
          palette.primary.shades.shade10.alpha,
        ),
        shade15: getRgba(
          palette.primary.shades.shade15[mode],
          palette.primary.shades.shade15.alpha,
        ),
        shade30: getRgba(
          palette.primary.shades.shade30[mode],
          palette.primary.shades.shade30.alpha,
        ),
        shade60: getRgba(
          palette.primary.shades.shade60[mode],
          palette.primary.shades.shade60.alpha,
        ),
        shade90: getRgba(
          palette.primary.shades.shade90[mode],
          palette.primary.shades.shade90.alpha,
        ),
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
      backdrop: getRgba(palette.background.backdrop[mode], palette.background.backdrop.alpha),
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
      shades: {
        default: getRgba(
          palette.neutral.shades.default[mode],
          palette.neutral.shades.default.alpha,
        ),
        light: getRgba(palette.neutral.shades.light[mode], palette.neutral.shades.light.alpha),
        dark: getRgba(palette.neutral.shades.dark[mode], palette.neutral.shades.dark.alpha),
      },
    },
    positive: {
      default: getRgba(palette.positive.default[mode], palette.positive.default.alpha),
      hover: getRgba(palette.positive.hover[mode], palette.positive.hover.alpha),
      active: getRgba(palette.positive.active[mode], palette.positive.active.alpha),
      shades: {
        default: getRgba(
          palette.positive.shades.default[mode],
          palette.positive.shades.default.alpha,
        ),
        light: getRgba(palette.positive.shades.light[mode], palette.positive.shades.light.alpha),
        dark: getRgba(palette.positive.shades.dark[mode], palette.positive.shades.dark.alpha),
      },
    },
    warning: {
      default: getRgba(palette.warning.default[mode], palette.warning.default.alpha),
      hover: getRgba(palette.warning.hover[mode], palette.warning.hover.alpha),
      active: getRgba(palette.warning.active[mode], palette.warning.active.alpha),
      shades: {
        default: getRgba(
          palette.warning.shades.default[mode],
          palette.warning.shades.default.alpha,
        ),
        light: getRgba(palette.warning.shades.light[mode], palette.warning.shades.light.alpha),
        dark: getRgba(palette.warning.shades.dark[mode], palette.warning.shades.dark.alpha),
      },
    },
    negative: {
      default: getRgba(palette.negative.default[mode], palette.negative.default.alpha),
      hover: getRgba(palette.negative.hover[mode], palette.negative.hover.alpha),
      active: getRgba(palette.negative.active[mode], palette.negative.active.alpha),
      shades: {
        default: getRgba(
          palette.negative.shades.default[mode],
          palette.negative.shades.default.alpha,
        ),
        light: getRgba(palette.negative.shades.light[mode], palette.negative.shades.light.alpha),
        dark: getRgba(palette.negative.shades.dark[mode], palette.negative.shades.dark.alpha),
      },
    },
  }

  return colorPalette
}
