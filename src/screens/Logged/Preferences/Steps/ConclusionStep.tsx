import { View } from 'react-native'

import useStyles from './styles'
import Global from '@components/Global'

const ConclusionStep = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <Global.Title> All Set!</Global.Title>
      <Global.Description>
        Your spoilers will stay hidden until you watch the movie or click on the spoiler
      </Global.Description>
    </View>
  )
}

export default ConclusionStep
