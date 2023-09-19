import * as Styled from './styles'
import { poster } from '@assets/images'
import Global from '@components/Global'
import Spoiler from '@components/Spoiler'

const content = (
  <Styled.Container>
    <Styled.Header>
      <Global.Title>{"Do you consider a movie's poster a spoiler?"}</Global.Title>
      <Global.Description>
        If you do, the poster will look like this until you watch the movie or click on it.
      </Global.Description>
    </Styled.Header>
    <Styled.Content>
      <Spoiler text="Click to show poster">
        <Styled.Poster source={poster} />
      </Spoiler>
    </Styled.Content>
  </Styled.Container>
)

export default content
