import { TouchableOpacity, Text } from 'react-native'
import { styled } from 'nativewind'

interface ButtonProps {
  appearance?: 'primary' | 'secondary' | 'dark' | 'light'
  name?: string
  size?: 'small' | 'medium' | 'big' | 'full'
  disabled?: boolean
  loading?: boolean
  onPress?: () => void
}

function ButtonComponent({ name, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-amber-500 h-11  rounded-xl justify-center w-full'
      {...rest}>
      <Text
        className='text-zinc-900 text-[16px] mx-6 font-[Montserrat-Bold]  text-center '
        lineBreakMode='middle'
        numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default styled(ButtonComponent)
