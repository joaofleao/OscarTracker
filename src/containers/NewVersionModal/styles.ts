import { styled } from 'styled-components/native'

import Button from '@components/Button'

export const Content = styled.FlatList(() => {
  return {
    maxHeight: '200px',
  }
})
export const ConfirmationButton = styled(Button)(() => {
  return {
    alignSelf: 'center',
  }
})

export const UpdateItem = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.medium,
    color: props.theme.colors.text.default,
    fontSize: '14px',
  }
})
