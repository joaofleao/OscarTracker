import { View } from 'react-native'

import * as Styled from './styles'
import Global from '@components/Global'
import Icon from '@components/Icon'
import Spoiler from '@components/Spoiler'

const content = (
  <Styled.Container>
    <Styled.Header>
      <Global.Title> And the movie ratings, are those spoilers?</Global.Title>
      <Global.Description>
        {"If you think so, the score will not show until you've seen the movie or clicked on it."}
      </Global.Description>
    </Styled.Header>
    <Styled.Content>
      <View>
        <Spoiler text="Show Score">
          <Styled.Rating>
            <Icon.Star
              width={28}
              height={28}
            />
            <Styled.RatingText>4.2</Styled.RatingText>
          </Styled.Rating>
        </Spoiler>
      </View>
    </Styled.Content>
  </Styled.Container>
)

export default content
