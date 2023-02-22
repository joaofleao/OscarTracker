import { TouchableOpacity, Text, View, ImageBackground } from 'react-native'
import { styled } from 'nativewind'
import { getImage } from '../../services/tmdb/api'
import { useUser, usePersonalData } from '../../hooks'
import { IconComponent, PosterComponent } from '..'
import colors from 'tailwindcss/colors'

interface ButtonProps {
  image: string
  title: string
  id: string
  onPress: () => void
}

function NomineeCardComponent({ image, title, id, onPress, ...rest }: ButtonProps) {
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
        <Text className={`ml-4 flex-1 text-lg font-primaryBold text-white`}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default styled(NomineeCardComponent)
