import { Text, TextProps } from 'react-native'

import useStyles from './styles'

const Accent = (props: TextProps): JSX.Element => {
  const styles = useStyles()
  return (
    <Text
      style={styles.accent}
      {...props}
    />
  )
}
export default Accent
