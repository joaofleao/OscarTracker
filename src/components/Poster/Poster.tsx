import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

import * as Styled from './styles'
import Icon from '@components/Icon'
import { useTheme } from '@features/theme'

export interface PosterProps extends ViewProps {
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
  const { image, isWatched, spoiler, large, winner, winnerTitle, winnerDescription, ...rest } = {
    ...defaultValues,
    ...props,
  }
  const theme = useTheme()

  const width = large ? 158 : 106
  const height = large ? 236 : 158

  const getWinnerCover = (
    <Styled.WinnerCover blur={isWatched}>
      {winnerTitle && <Styled.WinnerTitle large={large}>{winnerTitle}</Styled.WinnerTitle>}
      {winnerDescription && (
        <Styled.WinnerDescription large={large}>{winnerDescription}</Styled.WinnerDescription>
      )}
    </Styled.WinnerCover>
  )

  const getPoster = (
    <Styled.Image
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
    <Styled.IconContainer>
      <Icon.EyeOff
        size={20}
        color={theme.colors.text.inverse}
      />
    </Styled.IconContainer>
  )

  return (
    <Styled.Container
      width={width}
      height={height}
      winner={winner}
      {...rest}
    >
      {(isWatched || spoiler) && getPoster}
      {!isWatched && spoiler && getCover}
      {!isWatched && !winner && getIcon}
      {winner && getWinnerCover}
    </Styled.Container>
  )
}

export default Poster
