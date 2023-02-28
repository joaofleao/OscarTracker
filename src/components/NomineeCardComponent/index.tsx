import { TouchableOpacity, Text, View, ImageBackground } from 'react-native'
import { styled } from 'nativewind'
import { getImage } from '../../services/tmdb/api'
import { useUser, usePersonalData } from '../../hooks'
import { IconComponent, PosterComponent } from '..'
import colors from 'tailwindcss/colors'

interface ButtonProps {
  image: string
  title: string
  information?: string
  extra?: string
  id: string
  onPress: () => void
}


function NomineeCardComponent({ image, title, id, information, extra, onPress, ...rest }: ButtonProps) {
  const { preferences } = useUser()
  const { isWatched } = usePersonalData()

  return (
    <TouchableOpacity
      delayPressIn={200}
      onPress={onPress}
      className='justify-center '
      {...rest}>
      <View className='flex-row '>
        <PosterComponent
          image={getImage(image)}
          isWatched={isWatched(id)}
          spoiler={preferences.poster}
        />
        <View className='flex-1'>
          <Text
            numberOfLines={3}
            className={`ml-4 text-lg font-primaryBold text-white`}>
            {title}
          </Text>
          {information && (
            <Text
              numberOfLines={2}
              className={`ml-4 text-base font-primaryRegular text-zinc-600`}>
              {information}
            </Text>
          )}
          {extra && (
            <Text
              numberOfLines={2}
              className={`ml-4 text-base font-primaryRegular text-amber-500`}>
              {extra}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default styled(NomineeCardComponent)
