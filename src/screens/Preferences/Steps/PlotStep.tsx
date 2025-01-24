import { Text, View } from 'react-native'

import useStyles from './styles'
import Global from '@components/Global'
import Spoiler from '@components/Spoiler'

const PlotStep = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Global.Title>{"How about a movie's plot?"}</Global.Title>
        <Global.Description>
          If you do, the plot will be hidden like this until you watch the movie or click on it.
        </Global.Description>
      </View>
      <View style={styles.content}>
        <Spoiler text="Click to show the plot">
          <Text style={styles.plot}>
            When an alien with amazing powers crash-lands near Mossy Bottom Farm, Shaun the Sheep
            goes on a mission to shepherd the intergalactic visitor home before a sinister
            organization can capture her.
          </Text>
        </Spoiler>
      </View>
    </View>
  )
}

export default PlotStep
