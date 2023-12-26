import * as Styled from './styles'
import Global from '@components/Global'
import Spoiler from '@components/Spoiler'

const content = (
  <Styled.Container>
    <Styled.Header>
      <Global.Title>{"How about a movie's plot?"}</Global.Title>
      <Global.Description>
        If you do, the plot will be hidden like this until you watch the movie or click on it.
      </Global.Description>
    </Styled.Header>
    <Styled.Content>
      <Spoiler text="Click to show the plot">
        <Styled.Plot>
          When an alien with amazing powers crash-lands near Mossy Bottom Farm, Shaun the Sheep goes
          on a mission to shepherd the intergalactic visitor home before a sinister organization can
          capture her.
        </Styled.Plot>
      </Spoiler>
    </Styled.Content>
  </Styled.Container>
)

export default content
