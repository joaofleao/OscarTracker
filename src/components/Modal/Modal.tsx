import { GestureResponderEvent, Modal as RNModal, ModalProps as RNModalProps } from 'react-native'

import * as Styled from './styles'

export interface ModalProps extends RNModalProps {
  onClickOutside?: () => void
}
const defaultProps = {
  onClickOutside: null,
}

const Modal = (props: ModalProps): JSX.Element => {
  const { children, onClickOutside, ...rest } = { ...defaultProps, ...props }

  const handleClickOutside = (event: GestureResponderEvent): void => {
    if (onClickOutside && event.target === event.currentTarget) onClickOutside()
  }
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      {...rest}
    >
      <Styled.Background onPress={handleClickOutside}>
        <Styled.Container>{children}</Styled.Container>
      </Styled.Background>
    </RNModal>
  )
}

export default Modal
