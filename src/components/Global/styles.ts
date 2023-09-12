import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Screen = styled.SafeAreaView((props) => {
  return {
    backgroundColor: props.theme.palette.background.default,
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? '20px' : '0px',
  }
})

export const Separator = styled.View({
  width: '20px',
  height: '20px',
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '24px',
    color: props.theme.palette.text.default,
    letterSpacing: '1.5px',
  }
})

export const Description = styled.Text((props) => {
  return {
    fontFamily: props.theme.typography.primary.regular,
    fontSize: '18px',
    color: props.theme.palette.text.default,
    letterSpacing: '1px',
  }
})
