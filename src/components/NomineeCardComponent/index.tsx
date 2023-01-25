import { TouchableOpacity, Text, View, Image } from 'react-native'
import { styled } from 'nativewind'
import { getImage } from '../../services/tmdb/api'

interface ButtonProps {
  image: string
  title: string
  key: string
  onPress: () => void
}

function NomineeCardComponent({ image, title, key, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      key={key}
      onPress={onPress}
      className='justify-center '
      {...rest}>
      <View className='flex-row '>
        <Image
          className='w-[106px] h-[158px] rounded-xl'
          source={{ uri: getImage(image) }}
        />
        <Text className={`ml-4 flex-1 mt-1 text-lg font-primaryBold text-white`}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default styled(NomineeCardComponent)
