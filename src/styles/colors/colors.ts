import type { ColorsType } from './types'

const rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => {
    return parseInt(x, 16)
  })
  return `rgba(${r},${g},${b},${alpha})`
}

const colors: ColorsType = {
  primary: {
    default: '#F7B239',
    hover: '#CE9736',
    active: '#A57C33',
    shades: {
      shade5: rgba('#F7B239', 0.05),
      shade10: rgba('#F7B239', 0.1),
      shade15: rgba('#F7B239', 0.15),
      shade30: rgba('#F7B239', 0.3),
      shade60: rgba('#F7B239', 0.6),
      shade90: rgba('#F7B239', 0.9),
    },
  },
  background: {
    default: '#18181B',
    container: '#202024',
    foreground: '#ffffff',
    disabled: '#2B2B2F',
    backdrop: rgba('#000000', 0.7),
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
      default: rgba('#DBDBDB', 0.1),
      dark: rgba('#DBDBDB', 0.05),
      light: rgba('#DBDBDB', 0.15),
    },
  },
  positive: {
    default: '#047857',
    hover: '#065F46',
    active: '#064E3B',
    shades: {
      default: rgba('#047857', 0.1),
      dark: rgba('#047857', 0.05),
      light: rgba('#047857', 0.15),
    },
  },
  warning: {
    default: '#D97706',
    hover: '#B45309',
    active: '#92400E',
    shades: {
      default: rgba('#D97706', 0.1),
      dark: rgba('#D97706', 0.05),
      light: rgba('#D97706', 0.15),
    },
  },
  negative: {
    default: '#BE123C',
    hover: '#9F1239',
    active: '#881337',
    shades: {
      default: rgba('#BE123C', 0.1),
      dark: rgba('#BE123C', 0.05),
      light: rgba('#BE123C', 0.15),
    },
  },
}

export { colors }
