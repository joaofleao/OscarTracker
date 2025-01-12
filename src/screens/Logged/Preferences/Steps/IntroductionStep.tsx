import { View } from 'react-native'

import useStyles from './styles'
import Global from '@components/Global'

const IntroductionStep = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <Global.Title>Time to choose your spoiler preferences</Global.Title>
      <Global.Description>
        You can change your preferences at any time in the profile tab.
      </Global.Description>
    </View>
  )
}

export default IntroductionStep
