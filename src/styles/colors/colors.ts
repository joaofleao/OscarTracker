import { type PaletteType } from './types'

const primary = {
  default: {
    alpha: 1,
    dark: '#F7B239',
    highContrast: '#F7B239',
    light: '#F7B239',
    name: 'Primary Default',
  },
  hover: {
    alpha: 1,
    dark: '#CE9736',
    highContrast: '#CE9736',
    light: '#CE9736',
    name: 'Primary Hover',
  },
  active: {
    alpha: 1,
    dark: '#A57C33',
    highContrast: '#A57C33',
    light: '#A57C33',
    name: 'Primary Active',
  },
  shades: {
    shade10: {
      alpha: 0.1,
      dark: '#F7B239',
      highContrast: '#F7B239',
      light: '#F7B239',
      name: 'Primary Shade 10%',
    },
    shade5: {
      alpha: 0.05,
      dark: '#F7B239',
      highContrast: '#F7B239',
      light: '#F7B239',
      name: 'Primary Shade 5%',
    },
    shade15: {
      alpha: 0.15,
      dark: '#F7B239',
      highContrast: '#F7B239',
      light: '#F7B239',
      name: 'Primary Shade 15%',
    },
    shade30: {
      alpha: 0.3,
      dark: '#F7B239',
      highContrast: '#F7B239',
      light: '#F7B239',
      name: 'Primary Shade 30%',
    },
    shade60: {
      alpha: 0.6,
      dark: '#F7B239',
      highContrast: '#F7B239',
      light: '#F7B239',
      name: 'Primary Shade 60%',
    },
    shade90: {
      alpha: 0.9,
      dark: '#F7B239',
      highContrast: '#F7B239',
      light: '#F7B239',
      name: 'Primary Shade 90%',
    },
  },
}

const stroke = {
  default: {
    alpha: 1,
    dark: '#363636',
    highContrast: '#363636',
    light: '#363636',
    name: 'Stroke Default',
  },
}

const background = {
  default: {
    alpha: 1,
    dark: '#18181B',
    highContrast: '#18181B',
    light: '#18181B',
    name: 'Background Default',
  },
  container: {
    alpha: 1,
    dark: '#202024',
    highContrast: '#202024',
    light: '#202024',
    name: 'Background Container',
  },
  foreground: {
    alpha: 1,
    dark: '#ffffff',
    highContrast: '#ffffff',
    light: '#ffffff',
    name: 'Background Foreground',
  },
  disabled: {
    alpha: 1,
    dark: '#2B2B2F',
    highContrast: '#2B2B2F',
    light: '#2B2B2F',
    name: 'Background Disabled',
  },
  backdrop: {
    alpha: 0.7,
    dark: '#000000',
    highContrast: '#000000',
    light: '#000000',
    name: 'Background Backdrop',
  },
}

const text = {
  default: {
    alpha: 1,
    dark: '#FAFAFA',
    highContrast: '#FAFAFA',
    light: '#FAFAFA',
    name: 'Text Default',
  },
  light: {
    alpha: 1,
    dark: '#52525B',
    highContrast: '#52525B',
    light: '#52525B',
    name: 'Text Light',
  },
  medium: {
    alpha: 1,
    dark: '#E4E4E7',
    highContrast: '#E4E4E7',
    light: '#E4E4E7',
    name: 'Text Medium',
  },
  inverse: {
    alpha: 1,
    dark: '#27272A',
    highContrast: '#27272A',
    light: '#27272A',
    name: 'Text Inverse',
  },
  disabled: {
    alpha: 1,
    dark: '#A8A29E',
    highContrast: '#A8A29E',
    light: '#A8A29E',
    name: 'Text Disabled',
  },
}

const neutral = {
  default: {
    alpha: 1,
    dark: '#DBDBDB',
    highContrast: '#DBDBDB',
    light: '#DBDBDB',
    name: 'Neutral Default',
  },
  hover: {
    alpha: 1,
    dark: '#EBEBEB',
    highContrast: '#EBEBEB',
    light: '#EBEBEB',
    name: 'Neutral Hover',
  },
  active: {
    alpha: 1,
    dark: '#F1F1F1',
    highContrast: '#F1F1F1',
    light: '#F1F1F1',
    name: 'Neutral Active',
  },
  shades: {
    default: {
      alpha: 0.1,
      dark: '#DBDBDB',
      highContrast: '#DBDBDB',
      light: '#DBDBDB',
      name: 'Neutral shades Default',
    },
    light: {
      alpha: 0.05,
      dark: '#DBDBDB',
      highContrast: '#DBDBDB',
      light: '#DBDBDB',
      name: 'Neutral shades Light',
    },
    dark: {
      alpha: 0.15,
      dark: '#DBDBDB',
      highContrast: '#DBDBDB',
      light: '#DBDBDB',
      name: 'Neutral shades Dark',
    },
  },
}

const positive = {
  default: {
    alpha: 1,
    dark: '#047857',
    highContrast: '#047857',
    light: '#047857',
    name: 'Positive Default',
  },
  hover: {
    alpha: 1,
    dark: '#065F46',
    highContrast: '#065F46',
    light: '#065F46',
    name: 'Positive Hover',
  },
  active: {
    alpha: 1,
    dark: '#064E3B',
    highContrast: '#064E3B',
    light: '#064E3B',
    name: 'Positive Active',
  },
  shades: {
    default: {
      alpha: 0.1,
      dark: '#047857',
      highContrast: '#047857',
      light: '#047857',
      name: 'Positive Shades Default',
    },
    light: {
      alpha: 0.05,
      dark: '#047857',
      highContrast: '#047857',
      light: '#047857',
      name: 'Positive Shades Light',
    },
    dark: {
      alpha: 0.15,
      dark: '#047857',
      highContrast: '#047857',
      light: '#047857',
      name: 'Positive Shades Dark',
    },
  },
}

const warning = {
  default: {
    alpha: 1,
    dark: '#D97706',
    highContrast: '#D97706',
    light: '#D97706',
    name: 'Warning Default',
  },
  hover: {
    alpha: 1,
    dark: '#B45309',
    highContrast: '#B45309',
    light: '#B45309',
    name: 'Warning Hover',
  },
  active: {
    alpha: 1,
    dark: '#92400E',
    highContrast: '#92400E',
    light: '#92400E',
    name: 'Warning Active',
  },
  shades: {
    default: {
      alpha: 0.1,
      dark: '#D97706',
      highContrast: '#D97706',
      light: '#D97706',
      name: 'Warning Shades Default',
    },
    light: {
      alpha: 0.05,
      dark: '#D97706',
      highContrast: '#D97706',
      light: '#D97706',
      name: 'Warning Shades Light',
    },
    dark: {
      alpha: 0.15,
      dark: '#D97706',
      highContrast: '#D97706',
      light: '#D97706',
      name: 'Warning Shades Dark',
    },
  },
}

const negative = {
  default: {
    alpha: 1,
    dark: '#BE123C',
    highContrast: '#BE123C',
    light: '#BE123C',
    name: 'Negative Default',
  },
  hover: {
    alpha: 1,
    dark: '#9F1239',
    highContrast: '#9F1239',
    light: '#9F1239',
    name: 'Negative Hover',
  },
  active: {
    alpha: 1,
    dark: '#881337',
    highContrast: '#881337',
    light: '#881337',
    name: 'Negative Active',
  },
  shades: {
    default: {
      alpha: 0.1,
      dark: '#BE123C',
      highContrast: '#BE123C',
      light: '#BE123C',
      name: 'Negative Shades Default',
    },
    light: {
      alpha: 0.05,
      dark: '#BE123C',
      highContrast: '#BE123C',
      light: '#BE123C',
      name: 'Negative Shades Light',
    },
    dark: {
      alpha: 0.15,
      dark: '#BE123C',
      highContrast: '#BE123C',
      light: '#BE123C',
      name: 'Negative Shades Dark',
    },
  },
}

export const palette = {
  primary,
  stroke,
  background,
  text,
  neutral,
  positive,
  warning,
  negative,
} satisfies PaletteType
