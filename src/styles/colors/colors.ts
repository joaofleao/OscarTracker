import type { ColorsType } from './types'

const colors: ColorsType = {
  primary: {
    default: '#F7B239',
    hover: '#CE9736',
    active: '#A57C33',
    shades: {
      shade5: '#000',
      shade10: '#000',
      shade15: '#000',
      shade30: '#000',
      shade60: '#000',
      shade90: '#000',
    },
  },
  background: {
    default: '#18181B',
    container: '#202024',
    foreground: '#ffffff',
    disabled: '#2B2B2F',
    backdrop: '#000',
  },
  text: {
    default: '#FAFAFA',
    light: '#52525B',
    medium: '#E4E4E7',
    inverse: '#27272A',
    disabled: '#A8A29E',
  },
  neutral: {
    default: '#DBDBDB',
    hover: '#EBEBEB',
    active: '#F1F1F1',
    shades: {
      default: '#000',
      dark: '#000',
      light: '#000',
    },
  },
  positive: {
    default: '#047857',
    hover: '#065F46',
    active: '#064E3B',
    shades: {
      default: '#000',
      dark: '#000',
      light: '#000',
    },
  },
  warning: {
    default: '#D97706',
    hover: '#B45309',
    active: '#92400E',
    shades: {
      default: '#000',
      dark: '#000',
      light: '#000',
    },
  },
  negative: {
    default: '#BE123C',
    hover: '#9F1239',
    active: '#881337',
    shades: {
      default: '#000',
      dark: '#000',
      light: '#000',
    },
  },
}

export { colors }
