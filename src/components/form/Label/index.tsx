import { Text, TextProps } from 'react-native'

import useStyles from './styles'

interface LabelProps extends TextProps {
  accent?: boolean
}

const Label = ({ accent, ...rest }: LabelProps): JSX.Element => {
  const styles = useStyles()
  return (
    <Text
      style={[styles.label, accent && styles.accent]}
      {...rest}
    />
  )
}

export default Label
