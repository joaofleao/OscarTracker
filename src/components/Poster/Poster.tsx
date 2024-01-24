import * as Styled from './styles'
import Icon from '@components/Icon'
import { useTheme } from '@features/theme'

export interface PosterProps {
  image: string
  isWatched: boolean
  spoiler: boolean
  large?: boolean
  winner?: boolean
  winnerTitle?: string
  winnerDescription?: string
}

const defaultValues: Partial<PosterProps> = {
  isWatched: false,
  spoiler: false,
  large: false,
  winner: false,
}

const Poster = (props: PosterProps): JSX.Element => {
  const { image, isWatched, spoiler, large, winner, winnerTitle, winnerDescription } = {
    ...defaultValues,
    ...props,
  }
  const theme = useTheme()

  const width = large ? 158 : 106
  const height = large ? 236 : 158

  const getPoster = (
    <Styled.Image
      blurRadius={winner || isWatched || spoiler ? 0 : 20}
      source={{ uri: image }}
      resizeMode="cover"
    />
  )
  const getCover = (
    <Styled.Cover
      width={width}
      height={height}
      winner={winner}
    />
  )

  const getIcon = (
    <Styled.IconContainer
      large={large}
      winner={winner}
    >
      <Icon.Lock
        width={large ? 24 : 16}
        height={large ? 24 : 16}
        color={theme.colors.primary.default}
      />
    </Styled.IconContainer>
  )

  const getWinnerCover = (
    <Styled.WinnerCover>
      {winnerTitle && <Styled.WinnerTitle large={large}>{winnerTitle}</Styled.WinnerTitle>}
      {winnerDescription && (
        <Styled.WinnerDescription large={large}>{winnerDescription}</Styled.WinnerDescription>
      )}
    </Styled.WinnerCover>
  )
  return (
    <Styled.Container
      width={width}
      height={height}
      winner={winner}
    >
      {getPoster}

      {!isWatched ? getCover : undefined}
      {!isWatched ? getIcon : undefined}
      {winner && getWinnerCover}
    </Styled.Container>
  )
}

export default Poster
