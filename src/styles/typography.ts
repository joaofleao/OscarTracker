export interface TypographyType {
  primary: {
    bold: string
    semibold: string
    medium: string
    regular: string
    light: string
  }
  secondary: {
    bold: string
    semibold: string
    medium: string
    regular: string
    light: string
  }

  size: {
    font12: number
    font14: number
    font16: number
    font18: number
    font20: number
    font24: number
    font30: number
    font36: number
    font48: number
    font60: number
    font72: number
    font96: number
    font128: number
  }
}

export const typography = {
  primary: {
    bold: 'Quicksand-Bold',
    semibold: 'Quicksand-SemiBold',
    medium: 'Quicksand-Medium',
    regular: 'Quicksand-Regular',
    light: 'Quicksand-Light',
  },
  secondary: {
    bold: 'Spartan-Bold',
    semibold: 'Spartan-SemiBold',
    medium: 'Spartan-Medium',
    regular: 'Spartan-Regular',
    light: 'Spartan-Light',
  },
  size: {
    font12: 12,
    font14: 14,
    font16: 16,
    font18: 18,
    font20: 20,
    font24: 24,
    font30: 30,
    font36: 36,
    font48: 48,
    font60: 60,
    font72: 72,
    font96: 96,
    font128: 128,
  },
} satisfies TypographyType
