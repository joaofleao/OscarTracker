import * as Styled from './styles'
import Icon from '@components/Icon'
import { useTheme } from '@features/theme'

export interface PosterProps {
  image: string
  isWatched: boolean
  spoiler?: boolean
  size?: 'small' | 'large' | 'full'
  winner?: boolean
  winnerTitle?: string
  winnerDescription?: string
}

const defaultValues: Partial<PosterProps> = {
  isWatched: false,
  spoiler: false,
  size: 'small',
  winner: false,
}

const Poster = (props: PosterProps): JSX.Element => {
  const { image, isWatched, spoiler, size, winner, winnerTitle, winnerDescription } = {
    ...defaultValues,
    ...props,
  }
  const theme = useTheme()

  const width = size === 'large' ? 158 : size === 'full' ? '100%' : 106
  const height = size === 'large' ? 236 : size === 'full' ? '100%' : 158

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
      size={size}
      winner={winner && winnerTitle != null && winnerDescription != null}
    >
      <Icon.Lock
        width={size === 'small' ? 16 : 24}
        height={size === 'small' ? 16 : 24}
        color={theme.colors.primary.default}
      />
    </Styled.IconContainer>
  )

  const getWinnerCover = (
    <Styled.WinnerCover>
      {winnerTitle && (
        <Styled.WinnerTitle large={size === 'large'}>{winnerTitle}</Styled.WinnerTitle>
      )}
      {winnerDescription && (
        <Styled.WinnerDescription large={size === 'large'}>
          {winnerDescription}
        </Styled.WinnerDescription>
      )}
    </Styled.WinnerCover>
  )
  return (
    <Styled.Container
      width={width}
      height={height}
      winner={winner && winnerTitle != null && winnerDescription != null}
    >
      {getPoster}

      {!isWatched ? getCover : undefined}
      {!isWatched ? getIcon : undefined}
      {winner && getWinnerCover}
    </Styled.Container>
  )
}

export default Poster
