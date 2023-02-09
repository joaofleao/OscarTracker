import { TouchableOpacity, Text, View, ImageBackground } from 'react-native'
import { styled } from 'nativewind'
import { getImage } from '../../services/tmdb/api'
import { useUser, usePersonalData } from '../../hooks'
import { IconComponent } from '..'
import colors from 'tailwindcss/colors'

interface ButtonProps {
  image: string
  title: string
  id: string
  onPress: () => void
}

function NomineeCardComponent({ image, title, id, onPress, ...rest }: ButtonProps) {
  const { posterSpoiler } = useUser()
  const { isWatched } = usePersonalData()

  return (
    <TouchableOpacity
      delayPressIn={200}
      onPress={onPress}
      className='justify-center '
      {...rest}>
      <View className='flex-row '>
        {isWatched(id) && (
          <View className='w-[106px] h-[158px] bg-zinc-700 rounded-xl'>
            <ImageBackground
              imageStyle={{ borderRadius: 12 }}
              className='absolute w-full h-full rounded-xl '
              source={{ uri: getImage(image) }}
            />
          </View>
        )}
        {posterSpoiler && !isWatched(id) && (
          <View className='w-[106px] h-[158px]  items-center justify-center bg-zinc-700 rounded-xl'>
            <ImageBackground
              imageStyle={{ borderRadius: 12 }}
              className='absolute w-full h-full rounded-xl '
              source={{ uri: getImage(image) }}
            />
            <View className='absolute bg-zinc-900/70 w-full h-full rounded-xl' />
            <IconComponent
              name='eye-off'
              color={colors.amber[500]}
              size={24}
            />
          </View>
        )}
        {!posterSpoiler && !isWatched(id) && (
          <View className='w-[106px] h-[158px] items-center justify-center bg-zinc-800/40 rounded-xl'>
            <IconComponent
              name='eye-off'
              color={colors.amber[500]}
              size={24}
            />
          </View>
        )}

        <Text className={`ml-4 flex-1 text-lg font-primaryBold text-white`}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default styled(NomineeCardComponent)
