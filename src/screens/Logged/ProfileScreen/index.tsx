import { useState } from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'

import packageJson from '../../../../package.json'
import { Button, Global, Header, Icon, Input } from '../../../components'
import useAuth from '../../../features/auth/useAuth'
import useUser from '../../../features/user/useUser'

const ProfileScreen = (): JSX.Element => {
  const auth = useAuth()
  const user = useUser()

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

      <ScrollView>
        <Text
        // className="mx-5 mb-5 text-white font-primaryRegular text-xl"
        >
          Personal Information
        </Text>

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

        <Text
        // className="mx-5 mb-5 text-white text-xl font-primaryRegular"
        >
          Spoiler Preferences
        </Text>

        <View
        // className="mx-5 flex-row  mb-7 justify-between"
        >
          <Text
          // className="text-white text-base font-primaryRegular"
          >
            Show Posters
          </Text>

          <Switch
            disabled={!editing}
            trackColor={{ false: '#262626', true: '#262626' }}
            thumbColor={poster ? '#f59e0b' : '#3f3f46'}
            ios_backgroundColor={'#18181b'}
            value={poster}
            onValueChange={(): void => {
              setPoster((value) => {
                return !value
              })
            }}
          />
        </View>
        <View
        // className="mx-5 flex-row  mb-7 justify-between"
        >
          <Text
          // className="text-white text-base font-primaryRegular"
          >
            Show Plot
          </Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: '#262626', true: '#262626' }}
            thumbColor={plot ? '#f59e0b' : '#3f3f46'}
            ios_backgroundColor={'#18181b'}
            value={plot}
            onValueChange={(): void => {
              setPlot((value) => {
                return !value
              })
            }}
          />
        </View>
        <View
        // className="mx-5 flex-row  mb-7 justify-between"
        >
          <Text
          // className="text-white text-base font-primaryRegular"
          >
            Show Cast
          </Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: '#262626', true: '#262626' }}
            thumbColor={cast ? '#f59e0b' : '#3f3f46'}
            ios_backgroundColor={'#18181b'}
            value={cast}
            onValueChange={(): void => {
              setCast((value) => {
                return !value
              })
            }}
          />
        </View>
        <View
        // className="mx-5 flex-row  mb-7 justify-between"
        >
          <Text
          // className="text-white text-base font-primaryRegular"
          >
            Show Ratings
          </Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: '#262626', true: '#262626' }}
            thumbColor={ratings ? '#f59e0b' : '#3f3f46'}
            ios_backgroundColor={'#18181b'}
            value={ratings}
            onValueChange={(): void => {
              setRatings((value) => {
                return !value
              })
            }}
          />
        </View>

        <View
        // className="mx-5 flex-row  mb-7 justify-between"
        >
          <Text
          // className="text-white text-base font-primaryRegular"
          >
            App Version
          </Text>
          <Text
          // className="text-amber-500 text-base font-primaryRegular"
          >
            {packageJson.version}
          </Text>
        </View>

        <Button
          label="Log Out"
          variant="outlined"
          onPress={auth.signOut}
        />
      </ScrollView>
    </Global.Screen>
  )
}

export default ProfileScreen
