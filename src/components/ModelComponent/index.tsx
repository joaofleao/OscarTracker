import React from "react"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { HeaderComponent } from "../../components"

interface ModelProps {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  children: React.ReactNode
}
function ModelComponent({
  children,
  top = true,
  bottom = true,
  left = true,
  right = true,
  ...rest
}: ModelProps) {
  const insets = useSafeAreaInsets()

  const margins = {
    paddingTop: top ? insets.top : 0,
    paddingBottom: bottom ? insets.bottom : 0,
    paddingLeft: left ? insets.left : 0,
    paddingRight: right ? insets.right : 0,
  }

  return (
    <View className="flex-1 bg-zinc-900 " style={margins}>
      {children}
    </View>
  )
}

export default ModelComponent
