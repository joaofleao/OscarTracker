import styled from 'styled-components/native'

export const Content = styled.ScrollView(() => {
  return {
    paddingHorizontal: '20px',
  }
})

export const ContentStyle = {
  gap: '40px',
  flex: 1,
} as object

export const Title = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.regular,
    fontSize: '20px',
    lineHeight: '28px',
  }
})

export const Section = styled.View(() => {
  return {
    gap: '16px',
  }
})

export const Item = styled.View(() => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export const Subtitle = styled.Text((props) => {
  return {
    color: props.theme.palette.text.default,
    fontFamily: props.theme.typography.primary.regular,
    fontSize: '16px',
    lineHeight: '24px',
  }
})

export const AccentText = styled.Text((props) => {
  return {
    color: props.theme.palette.primary.default,
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '16px',
    lineHeight: '24px',
  }
})
export const ButtonContainer = styled.View(() => {
  return {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  }
})
