import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ModelProps {
  children: React.ReactNode
}
function ModelComponent({ children, ...rest }: ModelProps) {
  const insets = useSafeAreaInsets()
  return (
    <View
      className='flex-1 bg-zinc-900 '
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {children}
    </View>
  )
}

export default ModelComponent
