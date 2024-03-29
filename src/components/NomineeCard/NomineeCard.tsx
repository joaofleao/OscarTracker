import { type TouchableOpacityProps } from 'react-native'

import * as Styled from './styles'
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

  return (
    <Styled.Container
      delayPressIn={200}
      {...rest}
    >
      <Poster
        spoiler={user.preferences.poster}
        image={getImage(image)}
        isWatched={user.movies.includes(id)}
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
