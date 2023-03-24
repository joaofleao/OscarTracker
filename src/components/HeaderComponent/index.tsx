import { View, Text, TouchableOpacity } from "react-native"
import { styled } from "nativewind"
import { IconComponent } from "../../components"
import colors from "tailwindcss/colors"

interface HeaderProps {
  children?: string
  leadingButton?: string
  trailingButton?: string
  leadingAction?: () => void
  trailingAction?: () => void
}

function HeaderComponent({
  children,
  leadingAction,
  leadingButton,
  trailingAction,
  trailingButton,
  ...rest
}: HeaderProps) {
  const getButton = (action?: () => void, button?: string) => {
    if (action && button)
      return (
        <TouchableOpacity
          className="w-8 h-8 justify-center items-center rounded-lg"
          onPress={action}
        >
          <IconComponent className="text-amber-500" name={button} size={24} />
        </TouchableOpacity>
      )
    else return <View className="w-8 h-8 justify-center items-center" />
  }
  return (
    <View className="flex-row justify-between items-center py-5 px-4" {...rest}>
      {getButton(leadingAction, leadingButton)}
      <Text
        className=" flex-1 text-white text-lg mx-6 font-primaryRegular text-center "
        lineBreakMode="middle"
        numberOfLines={1}
      >
        {children}
      </Text>
      {getButton(trailingAction, trailingButton)}
    </View>
  )
}

export default styled(HeaderComponent)
