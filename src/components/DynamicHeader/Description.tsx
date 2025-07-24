import { Text, TextProps } from 'react-native'

import useStyles from './styles'

const Description = (props: TextProps): JSX.Element => {
  const styles = useStyles()
  return (
    <Text
      style={styles.description}
      {...props}
    />
  )
}
export default Description
