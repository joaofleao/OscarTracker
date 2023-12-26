import { useState } from 'react'
import { Platform, Switch } from 'react-native'

import * as Styled from './styles'
import Button from '@components/Button'
import TextField from '@components/FormFields/TextField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useAuth } from '@features/auth'
import { useTheme } from '@features/theme'
import { useUser } from '@features/user'
import packageJson from '@package.json'
import type { ProfileProps } from '@types'
import routes from '@utils/routes'

const Profile = ({ navigation }: ProfileProps): JSX.Element => {
  const auth = useAuth()
  const user = useUser()
  const theme = useTheme()

  const [displayName, setDisplayName] = useState<string>(user.displayName ?? '')
  const [nickname, setNickname] = useState<string>(user.nickname ?? '')

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

  const switchSettings = {
    trackColor: {
      false: theme.colors.background.container,
      true: theme.colors.background.container,
    },
    ios_backgroundColor: theme.colors.background.container,

    style: Platform.OS === 'android' && { height: 0 },
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.Placeholder />
        <Header.Title
          align="center"
          bigHeader
        >
          Profile
        </Header.Title>

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
            <Styled.Title>Personal Information </Styled.Title>

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
              <Styled.Title>Spoiler Preferences</Styled.Title>
              <Button
                label="Quiz"
                size="action"
                variant="secondary"
                onPress={(): void => {
                  return navigation.navigate(routes.logged.preferences)
                }}
              />
            </Styled.Item>

            <Styled.Item>
              <Styled.Subtitle>Show Posters</Styled.Subtitle>

              <Switch
                {...switchSettings}
                disabled={!editing}
                thumbColor={poster ? theme.colors.primary.default : theme.colors.background.default}
                value={poster}
                onValueChange={setPoster}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Subtitle>Show Plot</Styled.Subtitle>
              <Switch
                {...switchSettings}
                disabled={!editing}
                thumbColor={plot ? theme.colors.primary.default : theme.colors.background.default}
                value={plot}
                onValueChange={setPlot}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Subtitle>Show Cast</Styled.Subtitle>
              <Switch
                {...switchSettings}
                disabled={!editing}
                thumbColor={cast ? theme.colors.primary.default : theme.colors.background.default}
                value={cast}
                onValueChange={setCast}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Subtitle>Show Ratings</Styled.Subtitle>
              <Switch
                {...switchSettings}
                disabled={!editing}
                thumbColor={
                  ratings ? theme.colors.primary.default : theme.colors.background.default
                }
                value={ratings}
                onValueChange={setRatings}
              />
            </Styled.Item>
          </Styled.Section>

          {!!user.admin && (
            <Styled.Item>
              <Styled.Title>Admin Options</Styled.Title>
              <Switch
                {...switchSettings}
                thumbColor={
                  user.adminSettings
                    ? theme.colors.primary.default
                    : theme.colors.background.default
                }
                value={user.adminSettings}
                onValueChange={user.setAdminSettings}
              />
            </Styled.Item>
          )}

          <Styled.Item>
            <Styled.Title>App Version</Styled.Title>
            <Styled.AccentText>{packageJson.version}</Styled.AccentText>
          </Styled.Item>

          <Styled.ButtonContainer>
            <Button
              width="fixed"
              label="Log Out"
              variant="outlined"
              onPress={auth.signOut}
            />
          </Styled.ButtonContainer>
        </Styled.ContentContainer>
      </Styled.Content>
    </Global.Screen>
  )
}

export default Profile
