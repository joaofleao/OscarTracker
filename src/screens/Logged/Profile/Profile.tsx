import { useState } from 'react'

import EditionModal from './EditionModal'
import * as Styled from './styles'
import Button from '@components/Button'
import TextField from '@components/FormFields/TextField'
import Toggle from '@components/FormFields/Toggle'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useAuth } from '@features/auth'
import { useUser } from '@features/user'
import packageJson from '@package.json'
import type { ProfileProps } from '@types'
import routes from '@utils/routes'

const Profile = ({ navigation }: ProfileProps): JSX.Element => {
  const auth = useAuth()
  const user = useUser()

  const [displayName, setDisplayName] = useState<string>(user.displayName ?? '')
  const [nickname, setNickname] = useState<string>(user.nickname ?? '')

  const [editionModalOpen, setEditionModalOpen] = useState<boolean>(false)

  const [poster, setPoster] = useState<boolean>(user.preferences.poster)
  const [plot, setPlot] = useState<boolean>(user.preferences.plot)
  const [cast, setCast] = useState<boolean>(user.preferences.cast)
  const [ratings, setRatings] = useState<boolean>(user.preferences.ratings)

  const [editing, setEditing] = useState<boolean>(false)

  const displayNameValid =
    displayName.split(' ').length >= 2 &&
    displayName.split(' ')[0].length > 0 &&
    displayName.split(' ')[1].length > 0

  const nicknameValid = nickname.split(' ').length === 1 && nickname.split(' ')[0].length > 0

  const handleEdit = (): void => {
    if (editing) {
      user.updateUser(user.email, displayName, nickname, { poster, plot, cast, ratings }, undefined)
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.Row>
          <Header.Title bigHeader>Profile</Header.Title>
        </Header.Row>

        <Button
          icon={editing ? <Icon.CheckCircle /> : <Icon.Pencil />}
          onPress={handleEdit}
          size="action"
          variant="secondary"
        />
      </Header.Root>

      <Styled.Content>
        <Styled.ContentContainer>
          <Styled.Section>
            <Global.Description>Personal Information </Global.Description>

            <TextField
              editable={editing}
              label="Name"
              placeholder="Walt Disney"
              value={displayName}
              onChangeText={setDisplayName}
              valid={displayNameValid}
              errorText={'Please provide name and last name'}
            />
            <TextField
              editable={editing}
              placeholder="mickey_mouse"
              label="Nickname"
              value={nickname}
              onChangeText={setNickname}
              valid={nicknameValid}
              errorText={'Please provide a single nickname'}
            />

            <TextField
              editable={false}
              label="Email"
              value={user.email}
            />
          </Styled.Section>

          <Styled.Section>
            <Styled.Item>
              <Global.Description>Spoiler Preferences</Global.Description>
              <Button
                disabled={!editing}
                label="Quiz"
                size="action"
                variant="secondary"
                onPress={(): void => {
                  return navigation.navigate(routes.logged.preferences)
                }}
              />
            </Styled.Item>

            <Styled.Item>
              <Toggle
                disabled={!editing}
                label="Show Posters"
                selected={poster}
                onToggle={(): void => {
                  return setPoster((value: boolean): boolean => {
                    return !value
                  })
                }}
              />
            </Styled.Item>
            <Styled.Item>
              <Toggle
                disabled={!editing}
                label="Show Plot"
                selected={plot}
                onToggle={(): void => {
                  return setPlot((value: boolean): boolean => {
                    return !value
                  })
                }}
              />
            </Styled.Item>
            <Styled.Item>
              <Toggle
                disabled={!editing}
                label="Show Cast"
                selected={cast}
                onToggle={(): void => {
                  return setCast((value: boolean): boolean => {
                    return !value
                  })
                }}
              />
            </Styled.Item>
            <Styled.Item>
              <Toggle
                disabled={!editing}
                label="Show Ratings"
                selected={ratings}
                onToggle={(): void => {
                  return setRatings((value: boolean): boolean => {
                    return !value
                  })
                }}
              />
            </Styled.Item>
          </Styled.Section>

          <Styled.Item>
            <Global.Description>App Version</Global.Description>
            <Styled.AccentText>{packageJson.version}</Styled.AccentText>
          </Styled.Item>

          <Styled.ButtonContainer>
            {/* <Button
              width="full"
              label="Change Edition"
              variant="outlined"
              onPress={(): void => {
                return setEditionModalOpen(true)
              }}
            /> */}
            <Button
              width="full"
              label="Log Out"
              variant="outlined"
              onPress={auth.signOut}
            />
          </Styled.ButtonContainer>
        </Styled.ContentContainer>
        <Global.NavBarSeparator />
      </Styled.Content>
      <EditionModal
        visible={editionModalOpen}
        setVisible={setEditionModalOpen}
      />
    </Global.Screen>
  )
}

export default Profile
