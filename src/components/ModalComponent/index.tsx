import React from 'react'
import { Modal, type ModalProps } from 'react-native'

import { ButtonComponent } from '../../components'
import { useTheme } from '../../features'
import * as Styled from './styles'

interface Props extends ModalProps {
  title: string
  visible: boolean
  description: string
  loading: boolean
  onConfirm?: () => void
  confirmLabel?: string
  onCancel?: () => void
  cancelLabel?: string
  closeButton?: boolean
  onClose?: () => void
}

const defaultValue = {
  visible: true,
  loading: false,
  closeButton: false,
}

const ModalComponent = (props: Props): JSX.Element => {
  const { closeButton, title, visible, description, loading, onConfirm, confirmLabel, onCancel, cancelLabel, children, ...rest } = props
  const theme = useTheme()

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
    >
      <Styled.Background>
        <Styled.Modal {...rest}>
          <Styled.HeaderContent>
            <Styled.Title
              closeButton={closeButton}
              numberOfLines={2}
            >
              {title}
            </Styled.Title>
            {(closeButton ?? false) && onCancel != null && (
              <ButtonComponent
                icon="x"
                variant="secondary"
                width="fit"
              />
            )}
          </Styled.HeaderContent>
          <Styled.Description>{description}</Styled.Description>

          {children}

          <Styled.Footer>
            {cancelLabel != null && onCancel != null && (
              <ButtonComponent
                style={{ marginTop: theme.theme.spacing.space20 }}
                variant="secondary"
                onPress={onCancel}
                label={cancelLabel}
              />
            )}

            {confirmLabel != null && onConfirm != null && (
              <ButtonComponent
                style={{ marginTop: theme.theme.spacing.space20 }}
                onPress={onConfirm}
                label={confirmLabel}
              />
            )}
          </Styled.Footer>
        </Styled.Modal>
      </Styled.Background>
    </Modal>
  )
}

ModalComponent.defaultProps = defaultValue

export default ModalComponent
