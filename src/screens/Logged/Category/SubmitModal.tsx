import * as Styled from './styles'
import Button from '@components/Button'
import Modal from '@components/Modal'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ScreenTypes } from '@types'

type SubmitModalProps = {
  visible: boolean
  close: () => void
  category: string
  handleSubmit: () => void
}

const SubmitModal = (props: SubmitModalProps): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenTypes, 'logged'>>()

  const { category, handleSubmit, visible, close } = props

  const handleSubmitModal = (): void => {
    handleSubmit()
    navigation.goBack()
  }

  return (
    <Modal.Root
      visible={visible}
      onClickOutside={close}
    >
      <Modal.Title>Before you go back</Modal.Title>
      <Modal.Description>
        Do you want to submit the changes you made to your votes on
        <Styled.Accent> {category}</Styled.Accent>?
      </Modal.Description>

      <Modal.Footer>
        <Button
          width="full"
          label="Discard"
          variant="secondary"
          size="action"
          onPress={navigation.goBack}
        />
        <Button
          width="full"
          variant="primary"
          size="action"
          label="Submit"
          onPress={handleSubmitModal}
        />
      </Modal.Footer>
    </Modal.Root>
  )
}

export default SubmitModal
