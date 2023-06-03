import React from 'react'
import { Modal } from 'react-native'

import { LoadingComponent } from '../../components'
import { useTheme } from '../../hooks'
import * as Styled from './styles'

const LoadingScreen = (): JSX.Element => {
  const { loadingText, isLoading } = useTheme()

  return (
    <Modal
      visible={isLoading}
      transparent={true}
      animationType="fade"
    >
      <Styled.Container>
        <LoadingComponent
          animation="movie"
          size={120}
        />
        <Styled.Description>{loadingText}</Styled.Description>
      </Styled.Container>
    </Modal>
  )
}

export default LoadingScreen
