import { Modal as RNModal, type ModalProps as RNModalProps } from 'react-native'

import * as Styled from './styles'
import { Button, Icon } from '@components'

export interface ModalProps extends RNModalProps {
  title: string
  visible: boolean
  description: string
  loading?: boolean
  onConfirm?: () => void
  confirmLabel?: string
  onCancel?: () => void
  cancelLabel?: string
  closeButton?: boolean
  onClose?: () => void
}

const defaultValue: Partial<ModalProps> = {
  visible: true,
  loading: false,
  closeButton: false,
}

const Modal = (props: ModalProps): JSX.Element => {
  const {
    closeButton,
    title,
    visible,
    description,
    onConfirm,
    confirmLabel,
    onCancel,
    cancelLabel,
    children,
    ...rest
  } = { ...props, ...defaultValue }

  return (
    <RNModal
      visible={visible}
      animationType="fade"
      transparent={true}
    >
      <Styled.Background>
        <Styled.Modal {...rest}>
          <Styled.HeaderContent>
            <Styled.Title
              // closeButton={closeButton}
              numberOfLines={2}
            >
              {title}
            </Styled.Title>
            {(closeButton ?? false) && onCancel != null && (
              <Button
                icon={<Icon.X />}
                variant="secondary"
                width="fit"
              />
            )}
          </Styled.HeaderContent>
          <Styled.Description>{description}</Styled.Description>

          {children}

          <Styled.Footer>
            {cancelLabel != null && onCancel != null && (
              <Button
                variant="secondary"
                onPress={onCancel}
                label={cancelLabel}
              />
            )}

            {confirmLabel != null && onConfirm != null && (
              <Button
                onPress={onConfirm}
                label={confirmLabel}
              />
            )}
          </Styled.Footer>
        </Styled.Modal>
      </Styled.Background>
    </RNModal>
  )
}

export default Modal
