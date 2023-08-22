import React from 'react'
import { Platform, View, type ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ModelProps extends ViewProps {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  children: React.ReactNode
}
const Model = ({ children, top = true, bottom = true, left = true, right = true, ...props }: ModelProps): JSX.Element => {
  const insets = useSafeAreaInsets()
  const isAndroid = Platform.OS === 'android'

  const margins = {
    paddingTop: top ? (isAndroid ? 16 : insets.top) : 0,
    paddingBottom: bottom ? (isAndroid ? 24 : insets.bottom) : 0,
    paddingLeft: left ? insets.left : 0,
    paddingRight: right ? insets.right : 0,
  }

  return (
    <View
      className="flex-1 bg-zinc-900 "
      style={margins}
      {...props}
    >
      {children}
    </View>
  )
}

export default Model
