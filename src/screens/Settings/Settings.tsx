import { useState } from 'react'
import { Text, View } from 'react-native'

import useStyles from './styles'
import Button from '@components/Button'
import Select from '@components/form/Select'
import TextField from '@components/FormFields/TextField'
import Toggle from '@components/FormFields/Toggle'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useAuth } from '@features/auth'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import packageJson from '@package.json'
import type { SettingsProps } from '@types'
import routes from '@utils/routes'

const Settings = ({ navigation }: SettingsProps): JSX.Element => {
  const auth = useAuth()
  const { user, isLogged, updateUser, setLanguage, language } = useUser()
  const { refreshEdition } = useEdition()
  const styles = useStyles()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSignOut = (): void => {
    setLoading(true)
    auth
      .signOut()
      .then(() => {
        navigation.navigate(routes.home)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          icon={<Icon.ArrowLeft />}
          onPress={navigation.goBack}
          size="action"
          variant="secondary"
        />
        <Header.Row>
          <Header.Title>Settings</Header.Title>
        </Header.Row>
        <Header.Placeholder />
      </Header.Root>

      <Global.Body>
        {isLogged && (
          <View style={styles.section}>
            <Global.Description>Personal Information</Global.Description>

            <TextField
              editable={false}
              label="Name"
              placeholder="Walt Disney"
              value={user.displayName}
            />
            <TextField
              editable={false}
              placeholder="mickey_mouse"
              label="Nickname"
              value={user.nickname}
            />

            <TextField
              editable={false}
              label="Email"
              value={user?.email}
            />
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.item}>
            <Global.Description>Spoiler Preferences</Global.Description>
            <Button
              label="Quiz"
              size="action"
              variant="secondary"
              onPress={(): void => {
                return navigation.navigate(routes.preferences)
              }}
            />
          </View>

          <Toggle
            label="Hide Posters"
            disabled={!isLogged}
            selected={!user?.settings.preferences.poster}
            onToggle={(): void => {
              updateUser({
                settings: {
                  ...user?.settings,
                  preferences: {
                    ...user?.settings.preferences,
                    poster: !user?.settings.preferences.poster,
                  },
                },
              })
            }}
          />

          <Toggle
            label="Hide Plot"
            disabled={!isLogged}
            selected={!user?.settings.preferences.plot}
            onToggle={(): void => {
              updateUser({
                settings: {
                  ...user?.settings,
                  preferences: {
                    ...user?.settings.preferences,
                    plot: !user?.settings.preferences.plot,
                  },
                },
              })
            }}
          />

          <Toggle
            label="Hide Cast"
            disabled={!isLogged}
            selected={!user?.settings.preferences.cast}
            onToggle={(): void => {
              updateUser({
                settings: {
                  ...user?.settings,
                  preferences: {
                    ...user?.settings.preferences,
                    cast: !user?.settings.preferences.cast,
                  },
                },
              })
            }}
          />

          <Toggle
            label="Hide Ratings"
            disabled={!isLogged}
            selected={!user?.settings.preferences.ratings}
            onToggle={(): void => {
              updateUser({
                settings: {
                  ...user?.settings,
                  preferences: {
                    ...user?.settings.preferences,
                    ratings: !user?.settings.preferences.ratings,
                  },
                },
              })
            }}
          />
        </View>

        <View style={styles.section}>
          <Global.Description>System Settings</Global.Description>

          {/* <Toggle
            disabled
            label="Dark Mode"
            selected={user?.settings.darkMode}
            onToggle={(): void => {
              updateUser({
                settings: {
                  ...user?.settings,
                  darkMode: !user?.settings.darkMode,
                },
              })
            }}
          /> */}

          <Text
            style={styles.label}
            numberOfLines={1}
          >
            Language
          </Text>
          <Select
            data={[
              { id: 'pt-BR' as const, name: 'Português' },
              { id: 'en-US' as const, name: 'Inglês' },
            ]}
            placeholder="Português"
            selected={language}
            onSelect={setLanguage}
          />
        </View>

        <View style={styles.item}>
          <Global.Description>App Version</Global.Description>
          <Text style={styles.accentText}>{packageJson.version}</Text>
        </View>

        <View style={styles.bottom}>
          {isLogged && (
            <Button
              loading={loading}
              width="fixed"
              size="action"
              label="Log Out"
              variant="tertiary"
              onPress={handleSignOut}
            />
          )}

          <Button
            size="action"
            variant="primary"
            onPress={refreshEdition}
            label={'UPDATE'}
          />
        </View>
      </Global.Body>
    </Global.Screen>
  )
}

export default Settings
