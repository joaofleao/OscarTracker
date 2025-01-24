import { View, ViewProps } from 'react-native'

import useStyles from './styles'

const Section = (props: ViewProps): JSX.Element => {
  const styles = useStyles()

  return (
    <View
      style={[styles.root]}
      {...props}
    />
  )
}

export default Section
