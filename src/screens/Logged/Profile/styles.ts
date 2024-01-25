import styled from 'styled-components/native'

export const Content = styled.ScrollView(() => {
  return {
    paddingHorizontal: '20px',
  }
})

export const ContentContainer = styled.View(() => {
  return {
    flex: 1,
    gap: '40px',
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
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '16px',
    lineHeight: '24px',
  }
})

export const AccentText = styled.Text((props) => {
  return {
    color: props.theme.colors.primary.default,
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '16px',
    lineHeight: '24px',
  }
})
export const ButtonContainer = styled.View(() => {
  return {
    gap: '16px',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
})

export const Line = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.medium,
    fontSize: '14px',
    lineHeight: '20px',
    paddingLeft: 20,
  }
})
export const TabbedLine = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.medium,
    fontSize: '14px',
    lineHeight: '20px',

    paddingLeft: 80,
  }
})
export const TabbedLine2 = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.medium,
    fontSize: '14px',
    lineHeight: '20px',

    paddingLeft: 80,
  }
})
export const Container = styled.View((props) => {
  return {
    gap: 8,
    height: 120,
    justifyContent: 'center',
  }
})
