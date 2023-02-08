import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import { styled } from 'nativewind'

import colors from 'tailwindcss/colors'
import { IconComponent } from '../../components'

interface TextInputProps {
  appearance?: 'primary' | 'secondary' | 'dark' | 'light'
  value?: string
  placeholder: string
  size?: 'small' | 'medium' | 'big' | 'full'
  type?: 'text' | 'password' | 'number'
  conditions?: 'email' | 'phone' | 'password'
  className?: string
  search?: boolean
  loading?: boolean
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

function TextInputComponent({ placeholder, onChange, value, search, ...rest }: TextInputProps) {
  return (
    <View
      className='flex-row border-solid border-stone-300 border rounded-2xl justify-center items-center px-4 py-4'
      {...rest}>
      {search && (
        <IconComponent
          name='search'
          size={24}
          color={colors.stone[700]}
          className='mr-3 leading-6 my-'
        />
      )}

      <TextInput
        value={value}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor={colors.stone[700]}
        onChange={onChange}
        className='text-white text-md leading-4 font-primarySemibold py-0 my-0 flex-1 '
      />
    </View>
  )
}

export default styled(TextInputComponent)
