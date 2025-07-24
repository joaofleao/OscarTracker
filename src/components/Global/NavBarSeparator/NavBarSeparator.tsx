import { View, ViewProps } from 'react-native'

import useStyles from './styles'

const NavBarSeparator = (props: ViewProps): JSX.Element => {
  const styles = useStyles()

  return (
    <View
      style={styles.navBarSeparator}
      {...props}
    />
  )
}

export default NavBarSeparator
