import React from 'react'
import { View, type ViewProps } from 'react-native'
import { styled } from 'nativewind'

const SeparatorComponent = (props: ViewProps): JSX.Element => {
  return (
    <View
      className={`w-5 h-5`}
      {...props}
    />
  )
}

export default styled(SeparatorComponent)
