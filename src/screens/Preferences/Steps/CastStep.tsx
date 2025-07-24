import { Image, ImageSourcePropType, Text } from 'react-native'
import { View } from 'react-native'

import useStyles from './styles'
import { david, jason } from '@assets/images'
import Global from '@components/Global'
import Spoiler from '@components/Spoiler'

const CastStep = (): JSX.Element => {
  const styles = useStyles()

  const getCast = (name: string, character: string, image: ImageSourcePropType): JSX.Element => {
    return (
      <Spoiler text="Click to show cast member">
        <View style={styles.cast}>
          <Image
            style={styles.castImage}
            source={image}
          />
          <View style={styles.castText}>
            <Text
              style={styles.castName}
              numberOfLines={2}
            >
              {name}
            </Text>
            <Text
              style={styles.castCharacter}
              numberOfLines={2}
            >
              {character}
            </Text>
          </View>
        </View>
      </Spoiler>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Global.Title>
          Ok, this one is weird, but we have to ask... Is the casting of the movie a spoiler?
        </Global.Title>
        <Global.Description>
          If you do, the cast will remain hidden until you watch the movie or click on it.
        </Global.Description>
      </View>
      <View style={styles.content}>
        <View style={styles.castList}>
          {getCast('Jason Lee', 'Dave', jason)}
          {getCast('David Cross', 'Ian', david)}
        </View>
      </View>
    </View>
  )
}

export default CastStep
