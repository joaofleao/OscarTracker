import React, { useState } from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

import packageJson from '../../../../package.json'
import { ButtonComponent, HeaderComponent, ModelComponent, TextInputComponent } from '../../../components'
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
    <ModelComponent
      top={false}
      bottom={false}
    >
      <HeaderComponent
        title="Profile"
        trailingAction={handleEdit}
        trailingButton={editing ? 'check' : 'edit-2'}
        bigHeader
        align="left"
        description={user.email}
      />
      <ScrollView>
        <Text className="mx-4 mb-5 text-white font-primaryRegular text-xl">Personal Information</Text>

        <TextInputComponent
          value={displayName}
          className="mx-4 mb-4"
          editable={editing}
          label="Name"
          onChangeText={(text) => {
            setDisplayName(text)
          }}
        />
        <TextInputComponent
          value={nickName}
          className="mx-4 mb-4"
          editable={editing}
          label="Nickname"
          onChangeText={(text) => {
            setNickname(text)
          }}
        />

        <Text className="mx-4 mb-5 text-white text-xl font-primaryRegular">Spoiler Preferences</Text>

        <View className="mx-4 flex-row  mb-7 justify-between">
          <Text className="text-white text-base font-primaryRegular">Show Posters</Text>

          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={poster ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={poster}
            onValueChange={() => {
              setPoster((value) => !value)
            }}
          />
        </View>
        <View className="mx-4 flex-row  mb-7 justify-between">
          <Text className="text-white text-base font-primaryRegular">Show Plot</Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={plot ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={plot}
            onValueChange={() => {
              setPlot((value) => !value)
            }}
          />
        </View>
        <View className="mx-4 flex-row  mb-7 justify-between">
          <Text className="text-white text-base font-primaryRegular">Show Cast</Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={cast ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={cast}
            onValueChange={() => {
              setCast((value) => !value)
            }}
          />
        </View>
        <View className="mx-4 flex-row  mb-7 justify-between">
          <Text className="text-white text-base font-primaryRegular">Show Ratings</Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={ratings ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={ratings}
            onValueChange={() => {
              setRatings((value) => !value)
            }}
          />
        </View>

        <View className="mx-4 flex-row  mb-7 justify-between">
          <Text className="text-white text-base font-primaryRegular">App Version</Text>
          <Text className="text-amber-500 text-base font-primaryRegular">{packageJson.version}</Text>
        </View>

        <ButtonComponent
          label="Log Out"
          variant="outlined"
          className="mx-4 mb-5"
          onPress={auth.signOut}
        />
      </ScrollView>
    </ModelComponent>
  )
}

export default ProfileScreen
