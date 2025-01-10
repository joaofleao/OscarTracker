import { Text, View } from 'react-native'

import useStyles from './styles'
import { OscarLogo } from '@assets/images'

const Logo = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <OscarLogo />
      <View>
        <Text style={styles.title}>oscar</Text>
        <Text style={styles.title}>tracker</Text>
      </View>
    </View>
  )
}

export default Logo
