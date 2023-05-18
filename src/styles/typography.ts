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
    font12: string
    font14: string
    font16: string
    font18: string
    font20: string
    font24: string
    font30: string
    font36: string
    font48: string
    font60: string
    font72: string
    font96: string
    font128: string
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
    font12: '12px',
    font14: '14px',
    font16: '16px',
    font18: '18px',
    font20: '20px',
    font24: '24px',
    font30: '30px',
    font36: '36px',
    font48: '48px',
    font60: '60px',
    font72: '72px',
    font96: '96px',
    font128: '128px',
  },
} satisfies TypographyType
