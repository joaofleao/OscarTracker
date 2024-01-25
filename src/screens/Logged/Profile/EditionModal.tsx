import { View } from 'react-native'

import * as Styled from './styles'
import Modal from '@components/Modal'

type EditionModalProps = {
  visible: boolean
  setVisible: (value: boolean) => void
}

const EditionModal = (props: EditionModalProps): JSX.Element => {
  const { visible, setVisible } = props

  const close = (): void => {
    setVisible(false)
  }

  return (
    <Modal.Root
      visible={visible}
      onClickOutside={close}
    >
      <Styled.Container>
        <Styled.Line>Para Sophia,</Styled.Line>

        <View>
          <Styled.TabbedLine> mais do que tudo</Styled.TabbedLine>
          <Styled.TabbedLine2> e pra sempre</Styled.TabbedLine2>
        </View>
      </Styled.Container>
    </Modal.Root>
  )
}

export default EditionModal
