import { Text, TextProps } from 'react-native'

import useStyles from './styles'

const Title = (props: TextProps): JSX.Element => {
  const styles = useStyles()
  return (
    <Text
      style={styles.title}
      {...props}
    />
  )
}
export default Title
