import styled from 'styled-components/native'

export const Container = styled.View(() => {
  return {
    flex: 1,
    gap: '32px',
  }
})

export const Header = styled.View({
  gap: '12px',
})

export const Content = styled.View(() => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  }
})

export const Poster = styled.Image(() => {
  return {
    width: '228px',
    height: '338px',
    borderRadius: '12px',
  }
})

export const Plot = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '16px',
    textAlign: 'justify',
  }
})

export const CastList = styled.View(() => {
  return {
    flexDirection: 'row',
    gap: '20px',
  }
})
export const Cast = styled.View(() => {
  return {
    gap: '8px',
  }
})

export const CastImage = styled.Image(() => {
  return {
    width: '106px',
    height: '158px',
    borderRadius: '12px',
  }
})

export const CastText = styled.View(() => {
  return {
    gap: '4px',
  }
})

export const CastName = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '16px',
    textAlign: 'justify',
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

export const Rating = styled.View((props) => {
  return {
    color: props.theme.colors.text.default,
    backgroundColor: props.theme.colors.primary.shades.shade5,
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '14px',
    gap: '8px',

    paddingHorizontal: '20px',
    paddingVertical: '16px',
    alignItems: 'center',
  }
})

export const RatingText = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '20px',
    textAlign: 'justify',
    paddingBottom: '4px',
  }
})
