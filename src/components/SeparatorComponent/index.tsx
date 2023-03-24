import { View } from "react-native"
import { styled } from "nativewind"

function SeparatorComponent({ ...rest }) {
  return <View className={`w-5 h-5`} {...rest} />
}

export default styled(SeparatorComponent)
