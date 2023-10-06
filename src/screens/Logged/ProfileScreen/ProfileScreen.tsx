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
import type { ProfileScreenProps } from '@types'
import routes from '@utils/routes'

const ProfileScreen = ({ navigation }: ProfileScreenProps): JSX.Element => {
  const auth = useAuth()
  const user = useUser()
  const theme = useTheme()

  const [displayName, setDisplayName] = useState<string>(user.displayName)
  const [nickName, setNickname] = useState<string>(user.nickName)

  const [poster, setPoster] = useState<boolean>(user.preferences.poster)
  const [plot, setPlot] = useState<boolean>(user.preferences.plot)
  const [cast, setCast] = useState<boolean>(user.preferences.cast)
  const [ratings, setRatings] = useState<boolean>(user.preferences.ratings)

  const [editing, setEditing] = useState<boolean>(false)

  const handleEdit = (): void => {
    if (editing) {
      user.updateUser(user.email, displayName, nickName, { poster, plot, cast, ratings }, undefined)
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

    disabled: !editing,
    style: Platform.OS === 'android' && { height: 0 },
  }

  return (
    <Global.Screen hideBottom>
      <Header.Root>
        <Header.TextContainer>
          <Header.Title bigHeader>Profile</Header.Title>
          <Header.Description bigHeader>{user.email}</Header.Description>
        </Header.TextContainer>
        <Button
          icon={editing ? <Icon.CheckCircle /> : <Icon.Pencil />}
          onPress={handleEdit}
          variant="secondary"
        />
      </Header.Root>

      <Styled.Content>
        <Styled.ContentContainer>
          <Styled.Section>
            <Styled.Title>Personal Information</Styled.Title>

            <TextField
              value={displayName}
              editable={false}
              label="Name"
              onChangeText={setDisplayName}
            />

            <TextField
              value={nickName}
              editable={editing}
              label="Nickname"
              onChangeText={setNickname}
            />
          </Styled.Section>
          <Styled.Section>
            <Styled.Item>
              <Styled.Title>Spoiler Preferences</Styled.Title>
              <Button
                label="Quiz"
                variant="action"
                onPress={(): void => {
                  return navigation.navigate(routes.logged.preferences)
                }}
              />
            </Styled.Item>

            <Styled.Item>
              <Styled.Subtitle>Show Posters</Styled.Subtitle>

              <Switch
                {...switchSettings}
                thumbColor={poster ? theme.colors.primary.default : theme.colors.background.default}
                value={poster}
                onValueChange={setPoster}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Subtitle>Show Plot</Styled.Subtitle>
              <Switch
                {...switchSettings}
                thumbColor={plot ? theme.colors.primary.default : theme.colors.background.default}
                value={plot}
                onValueChange={setPlot}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Subtitle>Show Cast</Styled.Subtitle>
              <Switch
                {...switchSettings}
                thumbColor={cast ? theme.colors.primary.default : theme.colors.background.default}
                value={cast}
                onValueChange={setCast}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Subtitle>Show Ratings</Styled.Subtitle>
              <Switch
                {...switchSettings}
                thumbColor={
                  ratings ? theme.colors.primary.default : theme.colors.background.default
                }
                value={ratings}
                onValueChange={setRatings}
              />
            </Styled.Item>
          </Styled.Section>

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

export default ProfileScreen
