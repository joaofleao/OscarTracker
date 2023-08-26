import { useState } from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'

import packageJson from '../../../../package.json'
import { Button, Global, Header, Input } from '../../../components'
import { useAuth, useUser } from '../../../features'

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

  const handleEdit = (): any => {
    if (editing) {
      user.updateUser(user.email, displayName, nickName, { poster, plot, cast, ratings }, undefined)
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  return (
    <Global.Screen>
      <Header
        title="Profile"
        trailingAction={handleEdit}
        trailingButton={editing ? 'check' : 'edit-2'}
        bigHeader
        align="left"
        description={user.email}
      />
      <ScrollView>
        <Text
        // className="mx-5 mb-5 text-white font-primaryRegular text-xl"
        >
          Personal Information
        </Text>

        <Input
          value={displayName}
          mh="20px"
          mb="20px"
          editable={editing}
          label="Name"
          onChangeText={(text) => {
            setDisplayName(text)
          }}
        />
        <Input
          value={nickName}
          mb="20px"
          mh="20px"
          editable={editing}
          label="Nickname"
          onChangeText={(text) => {
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
            onValueChange={() => {
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
            onValueChange={() => {
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
            onValueChange={() => {
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
            onValueChange={() => {
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

        <View
        // className="w-full items-center"
        >
          <Button
            label="Log Out"
            variant="outlined"
            // className="mx-5 mb-5"
            onPress={auth.signOut}
          />
        </View>
      </ScrollView>
    </Global.Screen>
  )
}

export default ProfileScreen
