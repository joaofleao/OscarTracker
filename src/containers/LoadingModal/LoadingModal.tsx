import { Modal } from 'react-native'

import * as Styled from './styles'
import Loading from '@components/Loading'
import { useLoading } from '@features/loading'

const LoadingModal = (): JSX.Element => {
  const loading = useLoading()

  return (
    <Modal
      visible={loading.isActive}
      transparent={true}
      animationType="fade"
    >
      <Styled.Container>
        <Loading
          animation="movie"
          size={120}
        />
        <Styled.Description>{loading.text}</Styled.Description>
      </Styled.Container>
    </Modal>
  )
}

export default LoadingModal
