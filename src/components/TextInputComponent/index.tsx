import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import { styled } from 'nativewind'

const colors = require('tailwindcss/colors')

interface TextInputProps {
  appearance?: 'primary' | 'secondary' | 'dark' | 'light'
  value?: string
  placeholder: string
  size?: 'small' | 'medium' | 'big' | 'full'
  type?: 'text' | 'password' | 'number'
  conditions?: 'email' | 'phone' | 'password'
  className?: string
  disabled?: boolean
  loading?: boolean
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

function TextInputComponent({ placeholder, onChange, value, ...rest }: TextInputProps) {
  return (
    <View
      className='border-solid border-stone-300 border rounded-xl justify-center items-center '
      {...rest}>
      <TextInput
        value={value}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor={colors.gray[600]}
        onChange={onChange}
        className='text-white px-4 py-4 text-[16px] w-full font-[Montserrat-SemiBold] '
      />
    </View>
  )
}

export default styled(TextInputComponent)
