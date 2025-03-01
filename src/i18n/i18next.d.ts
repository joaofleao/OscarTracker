import ptBR from '@i18n/pt-BR'

const resources = {
  ...ptBR,
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources
  }
}
