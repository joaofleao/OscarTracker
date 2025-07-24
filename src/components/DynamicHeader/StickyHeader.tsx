import { View, ViewProps } from 'react-native'

import useStyles from './styles'

const StickyHeader = (props: ViewProps): JSX.Element => {
  const styles = useStyles()
  return (
    <View
      style={styles.stickyHeader}
      {...props}
    />
  )
}
export default StickyHeader
