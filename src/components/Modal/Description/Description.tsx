import { Text, TextProps } from 'react-native'

import useStyles from './styles'

const Description = (props: TextProps): JSX.Element => {
  const styles = useStyles()

  return (
    <Text
      style={[styles.root]}
      {...props}
    />
  )
}

export default Description
