import * as Styled from './styles'
import Icon from '@components/Icon'
import { useTheme } from '@features/theme'

export interface PosterProps {
  image: string
  isWatched: boolean
  spoiler: boolean
  large?: boolean
}

const defaultValues: Partial<PosterProps> = {
  isWatched: false,
  spoiler: false,
  large: false,
}

const Poster = (props: PosterProps): JSX.Element => {
  const { image, isWatched, spoiler, large = false } = { ...defaultValues, ...props }
  const theme = useTheme()

  const width = large ? 158 : 106
  const height = large ? 236 : 158

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
    />
  )

  const getIcon = (
    <Styled.IconContainer>
      <Icon.EyeOff
        size={20}
        color={theme.palette.text.inverse}
      />
    </Styled.IconContainer>
  )

  return (
    <Styled.Container
      width={width}
      height={height}
    >
      {(isWatched || spoiler) && getPoster}
      {!isWatched && spoiler && getCover}
      {!isWatched && getIcon}
    </Styled.Container>
  )
}

export default Poster
