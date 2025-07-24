import { View, ViewProps } from 'react-native'

import useStyles from './styles'

const HeaderBarSeparator = (props: ViewProps): JSX.Element => {
  const styles = useStyles()

  return (
    <View
      style={styles.headerBarSeparator}
      {...props}
    />
  )
}

export default HeaderBarSeparator
