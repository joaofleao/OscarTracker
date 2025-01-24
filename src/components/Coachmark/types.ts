import { ViewProps } from 'react-native'

export type CoachmarkProps = ViewProps & {
  anchor?: React.MutableRefObject<unknown>
  title?: string
  description?: string
  visible?: boolean
  close?: () => void
  onNext?: () => void
  onPrevious?: () => void
  onComplete?: () => void
  completeMessage?: string
  intrusive?: boolean
}
