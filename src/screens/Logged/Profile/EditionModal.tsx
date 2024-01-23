import Button from '@components/Button'
import Modal from '@components/Modal'
import { useEdition } from '@features/edition'

type EditionModalProps = {
  visible: boolean
  setVisible: (value: boolean) => void
}

const EditionModal = (props: EditionModalProps): JSX.Element => {
  const { visible, setVisible } = props
  const edition = useEdition()

  const close = (): void => {
    setVisible(false)
  }

  const handleSetEdition = (year: string): void => {
    edition.setEditionId(year)
    close()
  }

  return (
    <Modal.Root
      visible={visible}
      onClickOutside={close}
    >
      <Modal.Title>Change Edition</Modal.Title>
      <Modal.Description>Select the Oscar edition you want to use</Modal.Description>

      <Modal.Row>
        <Button
          size="action"
          width="full"
          label="2023"
          variant="primary"
          onPress={(): void => {
            return handleSetEdition('95')
          }}
        />
        <Button
          size="action"
          width="full"
          variant="primary"
          label="2024"
          onPress={(): void => {
            return handleSetEdition('96')
          }}
        />
      </Modal.Row>
    </Modal.Root>
  )
}

export default EditionModal
