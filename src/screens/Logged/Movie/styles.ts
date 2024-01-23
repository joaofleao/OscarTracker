import styled from 'styled-components/native'

import Spoiler from '@components/Spoiler'

export const ContentContainer = styled.View(() => {
  return {
    paddingHorizontal: '20px',
    flex: 1,
    gap: '20px',
    marginBottom: '20px',
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
    paddingVertical: '24px',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
  }
})

export const IconInformation = styled.View((props) => {
  return {
    flexDirection: 'column',
    paddingHorizontal: '12px',
    paddingVertical: '12px',
    width: '100%',
    minWidth: '64px',

    backgroundColor: props.theme.colors.background.container,
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
  }
})

export const IconInformationText = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
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
    borderColor: props.watched ? 'transparent' : props.theme.colors.primary.default,
    backgroundColor: props.watched ? props.theme.colors.primary.default : 'transparent',
  }
})

export const WatchedText = styled.Text<WatchedButtonProps>((props) => {
  return {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: props.theme.fonts.primary.bold,
    color: props.watched ? props.theme.colors.text.inverse : props.theme.colors.primary.default,
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
    paddingHorizontal: '20px',
    paddingVertical: '20px',
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
    fontSize: '24px',
    lineHeight: '32px',
  }
})

export const SubTitle = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
    fontSize: '16px',
    lineHeight: '20px',
    flex: 1,
  }
})

export const Plot = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '14px',
    lineHeight: '20px',

    letterSpacing: '1px',
    textAlign: 'justify',
  }
})

export const IMDBButtonText = styled.Text((props) => {
  return {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.primary.default,
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
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '16px',
    width: '100%',
  }
})

export const CastCharacter = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '14px',
    textAlign: 'justify',
    paddingBottom: '4px',
  }
})

export const CastImageContainer = styled.View((props) => {
  return {
    backgroundColor: props.theme.colors.background.container,
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
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.disabled,
  }
})

export const Provider = styled.Image((props) => {
  return {
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    marginBottom: '2px',
    backgroundColor: props.theme.colors.background.container,
  }
})

export const EmptyState = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.disabled,
  }
})

export const Nomination = styled.TouchableOpacity((props) => {
  return {
    gap: '4px',
    flexDirection: 'row',
    backgroundColor: props.theme.colors.background.container,
    paddingVertical: '8px',
    paddingHorizontal: '12px',
    borderRadius: '20px',
  }
})

export const NominationText = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
  }
})
