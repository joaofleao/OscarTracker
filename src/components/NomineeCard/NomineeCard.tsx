import { Text, TouchableOpacity, type TouchableOpacityProps, View } from 'react-native'

import useStyles from './styles'
import Poster from '@components/Poster'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface NomineeCardProps extends TouchableOpacityProps {
  image: string
  title: string
  information?: string
  extra?: string
  id: string
}

const NomineeCard = (props: NomineeCardProps): JSX.Element => {
  const { image, title, id, information, extra, ...rest } = props
  const user = useUser()
  const styles = useStyles()

  return (
    <TouchableOpacity
      style={styles.container}
      delayPressIn={200}
      {...rest}
    >
      <Poster
        spoiler={user.preferences.poster}
        image={getImage(image)}
        isWatched={user.movies.includes(id)}
      />
      <View style={styles.content}>
        <Text
          style={styles.title}
          numberOfLines={3}
        >
          {title}
        </Text>
        {information != null && (
          <Text
            style={styles.information}
            numberOfLines={2}
          >
            {information}
          </Text>
        )}
        {extra != null && (
          <Text
            style={styles.extra}
            numberOfLines={2}
          >
            {extra}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default NomineeCard
