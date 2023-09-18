import { useState } from 'react'
import { Switch } from 'react-native'

import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import Input from '@components/Input'
import { useAuth } from '@features/auth'
import { useTheme } from '@features/theme'
import { useUser } from '@features/user'
import packageJson from '@package.json'

const ProfileScreen = (): JSX.Element => {
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
      false: theme.palette.background.container,
      true: theme.palette.background.container,
    },
    ios_backgroundColor: theme.palette.background.container,
    disabled: !editing,
  }

  return (
    <Global.Screen>
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

      <Styled.Content contentContainerStyle={Styled.ContentStyle}>
        <Styled.Section>
          <Styled.Title>Personal Information</Styled.Title>

          <Input
            value={displayName}
            editable={editing}
            label="Name"
            onChangeText={(text): void => {
              setDisplayName(text)
            }}
          />

          <Input
            value={nickName}
            editable={editing}
            label="Nickname"
            onChangeText={(text): void => {
              setNickname(text)
            }}
          />
        </Styled.Section>
        <Styled.Section>
          <Styled.Title>Spoiler Preferences</Styled.Title>

          <Styled.Item>
            <Styled.Subtitle>Show Posters</Styled.Subtitle>

            <Switch
              {...switchSettings}
              thumbColor={poster ? theme.palette.primary.default : theme.palette.background.default}
              value={poster}
              onValueChange={setPoster}
            />
          </Styled.Item>
          <Styled.Item>
            <Styled.Subtitle>Show Plot</Styled.Subtitle>
            <Switch
              {...switchSettings}
              thumbColor={plot ? theme.palette.primary.default : theme.palette.background.default}
              value={plot}
              onValueChange={setPlot}
            />
          </Styled.Item>
          <Styled.Item>
            <Styled.Subtitle>Show Cast</Styled.Subtitle>
            <Switch
              {...switchSettings}
              thumbColor={cast ? theme.palette.primary.default : theme.palette.background.default}
              value={cast}
              onValueChange={setCast}
            />
          </Styled.Item>
          <Styled.Item>
            <Styled.Subtitle>Show Ratings</Styled.Subtitle>
            <Switch
              {...switchSettings}
              thumbColor={
                ratings ? theme.palette.primary.default : theme.palette.background.default
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
      </Styled.Content>
    </Global.Screen>
  )
}

export default ProfileScreen
