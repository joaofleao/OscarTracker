import { Platform } from 'react-native'
import styled from 'styled-components/native'

export interface Screen {
  hideTop?: boolean
  hideBottom?: boolean
}

const defaultValues = {
  hideTop: false,
  hideBottom: false,
}

export const Screen = styled.SafeAreaView<Screen>((props) => {
  const { hideTop, hideBottom } = { ...defaultValues, ...props }
  return {
    backgroundColor: props.theme.colors.background.default,
    flex: 1,
    paddingTop: Platform.OS === 'android' && !hideTop ? '20px' : '0px',
    paddingBottom: Platform.OS === 'android' && !hideBottom ? '20px' : '0px',
  }
})

export const Separator = styled.View({
  width: '20px',
  height: '20px',
})

export const SmallSeparator = styled.View({
  width: '8px',
  height: '8px',
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '22px',
    lineHeight: '32px',
    color: props.theme.colors.text.default,
    letterSpacing: '1.5px',
  }
})

export const Description = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '16px',
    lineHeight: '24px',
    color: props.theme.colors.text.default,
    letterSpacing: '1px',
  }
})
