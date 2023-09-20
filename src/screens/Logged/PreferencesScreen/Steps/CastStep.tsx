import { ImageSourcePropType } from 'react-native'

import { david, jason, justin } from '@assets/images'

const getCast = (name: string, character: string, image: ImageSourcePropType): JSX.Element => {
  return (
    <Spoiler text="Click to show cast member">
      <Styled.Cast>
        <Styled.CastImage source={image} />
        <Styled.CastText>
          <Styled.CastName numberOfLines={2}>{name}</Styled.CastName>
          <Styled.CastCharacter numberOfLines={2}>{character}</Styled.CastCharacter>
        </Styled.CastText>
      </Styled.Cast>
    </Spoiler>
  )
}

import * as Styled from './styles'
import Global from '@components/Global'
import Spoiler from '@components/Spoiler'

const content = (
  <Styled.Container>
    <Styled.Header>
      <Global.Title>
        Ok, this one is weird, but we have to ask... Is the casting of the movie a spoiler?
      </Global.Title>
      <Global.Description>
        If you do, the cast will remain hidden until you watch the movie or click on it.
      </Global.Description>
    </Styled.Header>
    <Styled.Content>
      <Styled.CastList>
        {getCast('Justin Long', 'Alvin', justin)}
        {getCast('Jason Lee', 'Dave', jason)}
        {getCast('David Cross', 'Ian', david)}
      </Styled.CastList>
    </Styled.Content>
  </Styled.Container>
)

export default content
