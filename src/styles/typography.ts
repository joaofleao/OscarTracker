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
    font22: string
    font24: string
    font26: string
    font28: string
    font32: string
    font36: string
    font42: string
    font48: string
    font54: string
    font60: string
    font68: string
    font76: string
    font84: string
    font92: string
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
    font22: '22px',
    font24: '24px',
    font26: '26px',
    font28: '28px',
    font32: '32px',
    font36: '36px',
    font42: '42px',
    font48: '48px',
    font54: '54px',
    font60: '60px',
    font68: '68px',
    font76: '76px',
    font84: '84px',
    font92: '92px',
  },
} satisfies TypographyType
