import { TextInput, View } from 'react-native'
import { styled } from 'nativewind'

interface TextInputProps {
  appearance?: 'primary' | 'secondary' | 'dark' | 'light'
  placeholder?: string
  size?: 'small' | 'medium' | 'big' | 'full'
  password?: 'text' | 'password' | 'number'
  conditions?: 'email' | 'phone' | 'password'
  className?: string
  disabled?: boolean
  loading?: boolean
  onChange?: () => void
}

function TextInputComponent({
  placeholder,
  onChange,
  ...rest
}: TextInputProps) {
  return (
    <View
      className="border-solid border-stone-300 border rounded-xl justify-center items-center px-4 py-4"
      {...rest}>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        onChange={onChange}
        className="text-white text-[16px] w-full font-[Montserrat-SemiBold] "
      />
    </View>
  )
}

export default styled(TextInputComponent)
