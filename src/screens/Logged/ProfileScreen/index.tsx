import React, { useState } from 'react'
import { Text, View, Switch, ScrollView } from 'react-native'
import colors from 'tailwindcss/colors'
import { ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { useAuth, useData, useUser } from '../../../hooks'
import packageJson from '../../../../package.json'

function ProfileScreen() {
  const { signOut, user } = useAuth()
  const { posterSpoiler, plotSpoiler, castSpoiler, ratingsSpoiler } = useUser()
  const { updatePreferences } = useData()
  const [poster, setPoster] = useState<boolean>(posterSpoiler)
  const [plot, setPlot] = useState<boolean>(plotSpoiler)
  const [cast, setCast] = useState<boolean>(castSpoiler)
  const [ratings, setRatings] = useState<boolean>(ratingsSpoiler)

  return (
    <ModelComponent top={false}>
      <HeaderComponent>Profile</HeaderComponent>
      <ScrollView>
        <Text className='mx-5 mb-5 text-white font-primaryRegular  text-xl'>Personal Information</Text>

        {/* <View className='mx-5 bg-zinc-500/10 rounded-xl px-4 pb-3 pt-2 mb-4'>
        <Text className='text-white text-sm'>Name</Text>
        <Text className='text-white text-base'>{user?.displayName}</Text>
      </View> */}

        <View className='mx-5 bg-zinc-500/10 rounded-xl px-4 pb-3 pt-2 mb-8'>
          <Text className='text-white text-sm font-primaryRegular '>Email</Text>
          <Text className='text-white text-base font-primaryRegular '>{user?.email}</Text>
        </View>

        <Text className='mx-5 mb-5 text-white text-xl font-primaryRegular '>Spoiler Preferences</Text>

        <View className='mx-5 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular '>Show Posters</Text>

          <Switch
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={poster ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={poster}
            onValueChange={() => setPoster(value => !value)}
          />
        </View>
        <View className='mx-5 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular '>Show Plot</Text>
          <Switch
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={plot ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={plot}
            onValueChange={() => setPlot(value => !value)}
          />
        </View>
        <View className='mx-5 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular '>Show Cast</Text>
          <Switch
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={cast ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={cast}
            onValueChange={() => setCast(value => !value)}
          />
        </View>
        <View className='mx-5 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular '>Show Ratings</Text>
          <Switch
            trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
            thumbColor={ratings ? colors.amber[500] : colors.zinc[700]}
            ios_backgroundColor={colors.zinc[900]}
            value={ratings}
            onValueChange={() => setRatings(value => !value)}
          />
        </View>

        <ButtonComponent
          name='Update Account'
          disabled={
            posterSpoiler === poster && plotSpoiler === plot && castSpoiler === cast && ratingsSpoiler === ratings
          }
          variant='filled'
          className='mx-5 mb-5'
          onPress={() => updatePreferences(poster, plot, cast, ratings)}
        />
        <ButtonComponent
          name='Log Out'
          variant='outlined'
          className='mx-5 mb-5'
          onPress={signOut}
        />
        <View className='mx-5 flex-row  mb-7 justify-between'>
          <Text className='text-white text-base font-primaryRegular '>App Version</Text>
          <Text className='text-amber-500 text-base font-primaryRegular '>{packageJson.version}</Text>
        </View>
      </ScrollView>
    </ModelComponent>
  )
}

export default ProfileScreen
