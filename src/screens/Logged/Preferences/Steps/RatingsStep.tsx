import { Text, View } from 'react-native'

import useStyles from './styles'
import Global from '@components/Global'
import Icon from '@components/Icon'
import Spoiler from '@components/Spoiler'

const RatingsStep = (): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Global.Title> And the movie ratings, are those spoilers?</Global.Title>
        <Global.Description>
          {"If you think so, the score will not show until you've seen the movie or clicked on it."}
        </Global.Description>
      </View>
      <View style={styles.content}>
        <View>
          <Spoiler text="Show Score">
            <View style={styles.rating}>
              <Icon.Star
                width={28}
                height={28}
              />
              <Text style={styles.ratingText}>4.2</Text>
            </View>
          </Spoiler>
        </View>
      </View>
    </View>
  )
}

export default RatingsStep
