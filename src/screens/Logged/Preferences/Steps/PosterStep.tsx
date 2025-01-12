import { Image, View } from 'react-native'

import useStyles from './styles'
import { poster } from '@assets/images'
import Global from '@components/Global'
import Spoiler from '@components/Spoiler'

const PosterStep = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Global.Title>{"Do you consider a movie's poster a spoiler?"}</Global.Title>
        <Global.Description>
          If you do, the poster will look like this until you watch the movie or click on it.
        </Global.Description>
      </View>
      <View style={styles.content}>
        <Spoiler text="Click to show poster">
          <Image
            source={poster}
            style={styles.poster}
          />
        </Spoiler>
      </View>
    </View>
  )
}

export default PosterStep
