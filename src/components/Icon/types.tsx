import { Svg } from 'react-native-svg'

export interface Props extends Partial<Svg> {
  filled?: boolean
  color?: string
}

export const defaultValues: Props = {
  filled: false,
  color: '#31213B',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
}
