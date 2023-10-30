import styled from 'styled-components/native'

import Header from '@components/Header'

interface HeaderProps {
  isFirst: boolean
}

export const HeaderRoot = styled(Header.Root)<HeaderProps>((props) => {
  return {
    ...(props.isFirst && {
      opacity: 0,
    }),
  }
})

export const Content = styled.View(() => {
  return {
    paddingHorizontal: '20px',
    flex: 1,
    gap: '32px',
    marginBottom: '20px',
  }
})

export const ButtonContainer = styled.View(() => {
  return {
    flexDirection: 'row',
    gap: '16px',
  }
})
