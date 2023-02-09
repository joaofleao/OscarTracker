import React, { useState } from 'react'
import { Text, View, Switch } from 'react-native'
import colors from 'tailwindcss/colors'
import { ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { useAuth, useData, useUser } from '../../../hooks'

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

      <Text className='mx-5 mb-5 text-white text-xl'>Personal Information</Text>

      {/* <View className='mx-5 bg-zinc-500/10 rounded-xl px-4 pb-3 pt-2 mb-4'>
        <Text className='text-white text-sm'>Name</Text>
        <Text className='text-white text-base'>{user?.displayName}</Text>
      </View> */}

      <View className='mx-5 bg-zinc-500/10 rounded-xl px-4 pb-3 pt-2 mb-8'>
        <Text className='text-white text-sm'>Email</Text>
        <Text className='text-white text-base'>{user?.email}</Text>
      </View>

      <Text className='mx-5 mb-5 text-white text-xl'>Spoiler Preferences</Text>

      <View className='mx-5 flex-row  mb-7 justify-between'>
        <Text className='text-white text-base'>Show Posters</Text>

        <Switch
          trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
          thumbColor={poster ? colors.amber[500] : colors.zinc[700]}
          ios_backgroundColor={colors.zinc[900]}
          value={poster}
          onValueChange={() => setPoster(value => !value)}
        />
      </View>
      <View className='mx-5 flex-row  mb-7 justify-between'>
        <Text className='text-white text-base'>Show Plot</Text>
        <Switch
          trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
          thumbColor={plot ? colors.amber[500] : colors.zinc[700]}
          ios_backgroundColor={colors.zinc[900]}
          value={plot}
          onValueChange={() => setPlot(value => !value)}
        />
      </View>
      <View className='mx-5 flex-row  mb-7 justify-between'>
        <Text className='text-white text-base'>Show Cast</Text>
        <Switch
          trackColor={{ false: colors.zinc[800], true: colors.zinc[800] }}
          thumbColor={cast ? colors.amber[500] : colors.zinc[700]}
          ios_backgroundColor={colors.zinc[900]}
          value={cast}
          onValueChange={() => setCast(value => !value)}
        />
      </View>
      <View className='mx-5 flex-row  mb-7 justify-between'>
        <Text className='text-white text-base'>Show Ratings</Text>
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
    </ModelComponent>
  )
}

export default ProfileScreen
