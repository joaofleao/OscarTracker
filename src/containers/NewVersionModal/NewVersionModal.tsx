import React from 'react'
import { Linking } from 'react-native'

import * as Styled from './styles'
import Global from '@components/Global'
import Modal from '@components/Modal'
import { useAnnouncements } from '@features/announcements'
import packageJson from '@package.json'

const NewVersionModal = (): JSX.Element => {
  const { announcements } = useAnnouncements()

  const update = announcements[0]

  const [modal, setModal] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (announcements.length > 0 && announcements[0].version !== packageJson.version) setModal(true)
  }, [announcements])

  const renderItem = (object): JSX.Element => {
    return <Styled.UpdateItem>● {object.item}</Styled.UpdateItem>
  }

  return (
    <Modal.Root visible={modal}>
      <Modal.Section>
        <Modal.Title>{update?.title}</Modal.Title>
        <Modal.Description>{update?.description}</Modal.Description>
      </Modal.Section>

      <Modal.Section>
        <Styled.Content
          data={update?.updates}
          renderItem={renderItem}
          ItemSeparatorComponent={Global.SmallSeparator}
        />
      </Modal.Section>

      <Modal.Section>
        <Styled.ConfirmationButton
          label={'Update to '.concat(update?.version)}
          variant="secondary"
          onPress={(): void => {
            Linking.openURL(update?.url)
          }}
        />
      </Modal.Section>
    </Modal.Root>
  )
}

export default NewVersionModal
