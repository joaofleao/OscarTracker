import styled from 'styled-components/native'

import Spoiler from '@components/Spoiler'

export const ContentContainer = styled.View(() => {
  return {
    paddingHorizontal: '20px',
    flex: 1,
    gap: '20px',
  }
})

export const SpoilerPoster = styled(Spoiler)(() => {
  return {
    flex: 1,
  }
})

export const Poster = styled.Image(() => {
  return {
    width: '100%',
    aspectRatio: 0.67,
    borderRadius: '12px',
  }
})

export const MainContent = styled.View(() => {
  return {
    flexDirection: 'row',
    flex: 1,
    gap: '16px',
  }
})
export const BasicData = styled.View(() => {
  return {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
  }
})
export const Informations = styled.View(() => {
  return {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: '8px',
  }
})

export const IconInformation = styled.View((props) => {
  return {
    flexDirection: 'row',
    paddingHorizontal: '12px',
    paddingVertical: '12px',

    backgroundColor: props.theme.palette.background.container,
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
  }
})

export const IconInformationText = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '16px',
  }
})

export interface WatchedButtonProps {
  watched: boolean
}

export const WatchedButton = styled.TouchableOpacity<WatchedButtonProps>((props) => {
  return {
    paddingHorizontal: '12px',
    paddingVertical: '12px',
    borderRadius: '16px',
    borderWidth: '2px',
    borderColor: props.watched ? 'transparent' : props.theme.palette.primary.default,
    backgroundColor: props.watched ? props.theme.palette.primary.default : 'transparent',
  }
})

export const WatchedText = styled.Text<WatchedButtonProps>((props) => {
  return {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: props.theme.typography.primary.bold,
    color: props.watched ? props.theme.palette.text.inverse : props.theme.palette.primary.default,
  }
})

export const CarousselHeader = styled.View(() => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '16px',
  }
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.text.default,
    fontSize: '16px',
    lineHeight: '20px',
    flex: 1,
  }
})

export const Plot = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.regular,
    fontSize: '14px',
    lineHeight: '20px',

    letterSpacing: '1px',
    textAlign: 'justify',
  }
})

export const IMDBButton = styled.TouchableOpacity((props) => {
  return {
    paddingHorizontal: '12px',
    paddingVertical: '12px',
    borderRadius: '16px',
    alignSelf: 'center',

    backgroundColor: props.theme.palette.background.container,
    flexDirection: 'row',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export const IMDBButtonText = styled.Text((props) => {
  return {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.primary.default,
  }
})

export const List = styled.FlatList(() => {
  return {
    marginHorizontal: '-20px',
  }
})

export const Cast = styled.TouchableOpacity(() => {
  return {
    gap: '8px',
    width: '106px',
  }
})
export const CastSpoiler = styled(Spoiler)(() => {
  return {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  }
})

export const CastImage = styled.Image(() => {
  return {
    width: '106px',
    height: '158px',
  }
})

export const CastName = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '16px',
    width: '100%',
  }
})

export const CastCharacter = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.regular,
    fontSize: '14px',
    textAlign: 'justify',
    paddingBottom: '4px',
  }
})

export const CastImageContainer = styled.View((props) => {
  return {
    backgroundColor: props.theme.palette.background.container,
    borderRadius: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  }
})

export const CastNoImage = styled.Text((props) => {
  return {
    position: 'absolute',
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.text.disabled,
  }
})

export const Provider = styled.Image((props) => {
  return {
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    marginBottom: '2px',
    backgroundColor: props.theme.palette.background.container,
  }
})

export const NoProvider = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.text.disabled,
  }
})

export const Nomination = styled.TouchableOpacity((props) => {
  return {
    backgroundColor: props.theme.palette.primary.shades.shade5,
    paddingVertical: '8px',
    paddingHorizontal: '12px',
    borderRadius: '20px',
  }
})

export const NominationText = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    color: props.theme.palette.primary.default,
  }
})
