import React from 'react'
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import { styled } from 'nativewind'

import { Facebook, Google } from '../../assets/images'

interface SocialButtonProps extends TouchableOpacityProps {
  name: string
  onPress?: () => void
}

const SocialButtonComponent = ({ name, onPress, ...props }: SocialButtonProps): JSX.Element => {
  const getIcon = (): JSX.Element => {
    if (name === 'Facebook') return <Facebook />
    if (name === 'Google') return <Google />
    return <Text>{name}</Text>
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-10 w-10 rounded-full items-center justify-center "
      {...props}
    >
      {getIcon()}
    </TouchableOpacity>
  )
}

export default styled(SocialButtonComponent)
