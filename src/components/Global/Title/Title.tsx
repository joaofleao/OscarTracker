import { View, ViewProps } from 'react-native'

import useStyles from './styles'

const Footer = (props: ViewProps): JSX.Element => {
  const styles = useStyles()

  return (
    <View
      style={styles.title}
      {...props}
    />
  )
}

export default Footer
