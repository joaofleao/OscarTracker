import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'
import { styled } from 'nativewind'

import colors from 'tailwindcss/colors'
import { IconComponent } from '../../components'
import { useState } from 'react'

interface TextInputProps {
  appearance?: 'primary' | 'secondary' | 'dark' | 'light'
  value?: string
  placeholder: string
  size?: 'small' | 'medium' | 'big' | 'full'
  type?: 'text' | 'password' | 'number' | 'search'
  conditions?: 'email' | 'phone' | 'password'
  className?: string
  loading?: boolean
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

function TextInputComponent({ placeholder, onChange, value, conditions, type, ...rest }: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  return (
    <View
      className='flex-row border-solid border-stone-300 border rounded-2xl justify-center items-center px-4 py-4'
      {...rest}>
      {type === 'search' && (
        <IconComponent
          name='search'
          size={24}
          color={colors.stone[700]}
          className='mr-3 leading-6'
        />
      )}

      <TextInput
        secureTextEntry={isPasswordVisible}
        value={value}
        autoCapitalize='none'
        placeholder={placeholder}
        placeholderTextColor={colors.stone[700]}
        onChange={onChange}
        className='text-white text-base leading-4 font-primarySemibold py-0 my-0 flex-1 '
      />

      {type === 'password' && (
        <TouchableOpacity onPress={() => setIsPasswordVisible(value => !value)}>
          <IconComponent
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={colors.amber[500]}
            className='ml-3 leading-6'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default styled(TextInputComponent)
