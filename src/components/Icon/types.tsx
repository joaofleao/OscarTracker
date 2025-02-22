import { SvgProps } from 'react-native-svg'

export interface Props extends SvgProps {
  filled?: boolean
  color?: string
}

export const defaultValues: Props = {
  filled: false,
  color: '#F7B239',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
}
