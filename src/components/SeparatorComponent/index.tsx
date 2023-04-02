import React from 'react'
import { View } from 'react-native'
import { styled } from 'nativewind'

const SeparatorComponent = ({ ...props }): JSX.Element => {
  return (
    <View
      className={`w-5 h-5`}
      {...props}
    />
  )
}

export default styled(SeparatorComponent)
