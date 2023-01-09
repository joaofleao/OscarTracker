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
      className="bg-zinc-900 border-amber-500 h-11 border-solid border rounded-xl justify-center w-full"
      {...rest}>
      <Text
        className="text-amber-500 text-[16px] mx-6 font-[Montserrat-Bold]  text-center "
        lineBreakMode="middle"
        numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default styled(ButtonComponent)
