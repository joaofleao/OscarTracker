export interface ColorType {
  alpha: number
  dark: string
  highContrast: string
  light: string
  name: string
}

export interface BasicPaletteType {
  default: ColorType
  hover: ColorType
  active: ColorType
  shades: {
    default: ColorType
    dark: ColorType
    light: ColorType
  }
}

export interface PaletteType {
  primary: {
    default: ColorType
    hover: ColorType
    active: ColorType
    shades: {
      shade5: ColorType
      shade10: ColorType
      shade15: ColorType
      shade30: ColorType
      shade60: ColorType
      shade90: ColorType
    }
  }
  stroke: {
    default: ColorType
  }
  background: {
    default: ColorType
    container: ColorType
    foreground: ColorType
    disabled: ColorType
    backdrop: ColorType
  }
  text: {
    default: ColorType
    light: ColorType
    medium: ColorType
    inverse: ColorType
    disabled: ColorType
  }
  neutral: BasicPaletteType
  positive: BasicPaletteType
  warning: BasicPaletteType
  negative: BasicPaletteType
}

export interface SimplifiedBasicPaletteType {
  default: string
  hover: string
  active: string
  shades: {
    default: string
    light: string
    dark: string
  }
}

export interface SimplifiedPaletteType {
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
  stroke: {
    default: string
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
  neutral: SimplifiedBasicPaletteType
  positive: SimplifiedBasicPaletteType
  warning: SimplifiedBasicPaletteType
  negative: SimplifiedBasicPaletteType
}
