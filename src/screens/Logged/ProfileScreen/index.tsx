import React, { useState } from 'react'
import { Text, View, Switch, ScrollView } from 'react-native'
import colors from 'tailwindcss/colors'
import { ButtonComponent, ModelComponent, HeaderComponent, TextInputComponent } from '../../../components'
import { useAuth, useData, useUser } from '../../../hooks'
import packageJson from '../../../../package.json'

function ProfileScreen() {
  const { signOut } = useAuth()
  const user = useUser()
  const { updateUser } = useData()

  const [displayName, setDisplayName] = useState<string>(user.displayName)
  const [nickName, setNickname] = useState<string>(user.nickName)

  const [poster, setPoster] = useState<boolean>(user.preferences.poster)
  const [plot, setPlot] = useState<boolean>(user.preferences.plot)
  const [cast, setCast] = useState<boolean>(user.preferences.cast)
  const [ratings, setRatings] = useState<boolean>(user.preferences.ratings)

  const [editing, setEditing] = useState<boolean>(false)

  const handleEdit = () => {
    if (editing) {
      updateUser(user.email, displayName, nickName, { poster, plot, cast, ratings }, undefined)
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  return (
    <ModelComponent
      top={false}
      bottom={false}>
      <HeaderComponent
        trailingAction={() => handleEdit()}
        trailingButton={editing ? 'check' : 'edit-2'}>
        Profile
      </HeaderComponent>
      <ScrollView>
        <Text className='mx-4 mb-5 text-white font-primaryRegular text-xl'>Personal Information</Text>

        <TextInputComponent
          value={displayName}
          className='mx-4 mb-4'
          editable={editing}
          label='Name'
          onChangeText={text => setDisplayName(text)}
        />
        <TextInputComponent
          value={nickName}
          className='mx-4 mb-4'
          editable={editing}
          label='Nickname'
          onChangeText={text => setNickname(text)}
        />
        <TextInputComponent
          value={user.email}
          className='mx-4 mb-8'
          editable={false}
          label='Email (not editable)'
          onChangeText={() => {}}
        />

        <Text className='mx-4 mb-5 text-white text-xl font-primaryRegular'>Spoiler Preferences</Text>

        <View className='mx-4 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular'>Show Posters</Text>

          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={poster ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={poster}
            onValueChange={() => setPoster(value => !value)}
          />
        </View>
        <View className='mx-4 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular'>Show Plot</Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={plot ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={plot}
            onValueChange={() => setPlot(value => !value)}
          />
        </View>
        <View className='mx-4 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular'>Show Cast</Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={cast ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={cast}
            onValueChange={() => setCast(value => !value)}
          />
        </View>
        <View className='mx-4 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular'>Show Ratings</Text>
          <Switch
            disabled={!editing}
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={ratings ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={ratings}
            onValueChange={() => setRatings(value => !value)}
          />
        </View>

        <View className='mx-4 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular'>App Version</Text>
          <Text className='text-amber-500 text-base font-primaryRegular'>{packageJson.version}</Text>
        </View>

        <ButtonComponent
          name='Log Out'
          variant='outlined'
          className='mx-4 mb-5'
          onPress={signOut}
        />
      </ScrollView>
    </ModelComponent>
  )
}

export default ProfileScreen
