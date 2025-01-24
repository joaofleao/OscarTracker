import { Text, View } from 'react-native'

import useStyles from './styles'
import Icon from '@components/Icon'

const Logo = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.logo}>
      <Icon.Oscar filled />
      <Text style={styles.appName}>oscar tracker</Text>
    </View>
  )
}

export default Logo
