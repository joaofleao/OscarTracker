export interface BasicColorsType {
  default: string
  hover: string
  active: string
  shades: {
    default: string
    light: string
    dark: string
  }
}

export interface ColorsType {
  primary: {
    default: string
    hover: string
    active: string
    shades: {
      shade5: string
      shade10: string
      shade15: string
      shade30: string
      shade60: string
      shade90: string
    }
  }
  background: {
    default: string
    container: string
    foreground: string
    disabled: string
    backdrop: string
  }
  text: {
    default: string
    light: string
    medium: string
    inverse: string
    disabled: string
  }
  neutral: BasicColorsType
  positive: BasicColorsType
  warning: BasicColorsType
  negative: BasicColorsType
}
