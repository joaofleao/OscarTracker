import React from 'react'
import { Modal } from 'react-native'

import { LoadingComponent } from '../../components'
import { useLoading } from '../../features'
import * as Styled from './styles'

const LoadingScreen = (): JSX.Element => {
  const loading = useLoading()

  return (
    <Modal
      visible={loading.isActive}
      transparent={true}
      animationType="fade"
    >
      <Styled.Container>
        <LoadingComponent
          animation="movie"
          size={120}
        />
        <Styled.Description>{loading.text}</Styled.Description>
      </Styled.Container>
    </Modal>
  )
}

export default LoadingScreen
