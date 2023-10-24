import styled from 'styled-components/native'

import TextToggle from '@components/TextToggle'

export const Container = styled.Pressable({
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '16px',
})

export const Content = styled.View(() => {
  return {
    flex: 1,
    borderRadius: 14,
  }
})

interface TitleProps {
  winner: boolean
}

export const Title = styled.Text<TitleProps>((props) => {
  return {
    fontSize: '18px',
    fontFamily: props.theme.fonts.primary.bold,
    color: props.winner ? props.theme.colors.primary.default : props.theme.colors.text.default,
  }
})

export const Information = styled.Text((props) => {
  return {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: props.theme.fonts.primary.regular,
    color: props.theme.colors.text.light,
  }
})

export const Movie = styled.Text((props) => {
  return {
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: props.theme.fonts.primary.regular,
    color: props.theme.colors.text.default,
  }
})
export const Toggle = styled(TextToggle)(() => {
  return {
    maxWidth: '45%',
  }
})

export const Bets = styled.View(() => {
  return {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 8,
    overflow: 'hidden',
    justifyContent: 'space-around',
  }
})
