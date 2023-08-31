import { Modal } from 'react-native'

import Loading from '../../components/Loading'
import useLoading from '../../features/loading/useLoading'
import * as Styled from './styles'

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
