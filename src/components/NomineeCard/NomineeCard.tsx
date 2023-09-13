import { type TouchableOpacityProps } from 'react-native'

import { getImage } from '../../services/tmdb/api'
import Poster from '../Poster'
import * as Styled from './styles'
import { useUser } from '@features'

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

  return (
    <Styled.Container
      delayPressIn={200}
      {...rest}
    >
      <Poster
        image={getImage(image)}
        isWatched={user.watchedMovies.includes(id)}
        spoiler={user.preferences.poster}
      />
      <Styled.Content>
        <Styled.Title numberOfLines={3}>{title}</Styled.Title>
        {information != null && (
          <Styled.Information numberOfLines={2}>{information}</Styled.Information>
        )}
        {extra != null && <Styled.Extra numberOfLines={2}>{extra}</Styled.Extra>}
      </Styled.Content>
    </Styled.Container>
  )
}

export default NomineeCard
