import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { IconComponent } from "../../components"
import { styled } from "nativewind"

import colors from "tailwindcss/colors"

interface ButtonProps extends TouchableOpacity {
  appearance?: "primary" | "secondary" | "dark" | "light"
  name?: string
  size?: "small" | "medium" | "big" | "full"
  variant?: "plain" | "filled" | "outlined"
  disabled?: boolean
  loading?: boolean
  onPress?: () => void
  icon?: string

  iconPositon?: "trailing" | "leading"
}

const ButtonComponent = ({
  name,
  onPress,
  variant = "filled",
  iconPositon,
  icon,
  ...rest
}: ButtonProps): any => {
  const plain = variant === "plain"
  const outlined = variant === "outlined"
  const filled = variant === "filled"

  function getColor(): string {
    if (plain) return colors.amber[500]
    if (outlined) return colors.amber[500]
    if (filled) return colors.zinc[900]
    return colors.amber[500]
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={` justify-center py-3
        ${icon != null && iconPositon === undefined ? "px-0" : "px-4"}
        ${name != null ? "rounded-3xl" : "rounded-2xl "}

        ${outlined ? "border-solid border-2 border-amber-500" : ""}
        ${filled ? "bg-amber-500" : ""}
        `}
      {...rest}
    >
      <View className="flex-row justify-center items-center ">
        {icon != null && iconPositon === "leading" ? (
          <IconComponent
            name={icon}
            size={24}
            color={getColor()}
            className={name != null ? "mr-3" : ""}
          />
        ) : null}

        <Text
          className={`text-lg font-primaryBold text-center flex-1`}
          style={{ color: getColor() }}
          numberOfLines={1}
        >
          {name}
        </Text>

        {icon != null && iconPositon === "trailing" && (
          <IconComponent
            name={icon}
            size={24}
            color={getColor()}
            className={name != null ? "ml-3" : undefined}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default styled(ButtonComponent)
