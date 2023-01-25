import { View, Text, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { IconComponent } from '../../components'
import colors from 'tailwindcss/colors'

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
  function getLeadingButton() {
    if (leadingAction && leadingButton)
      return (
        <TouchableOpacity onPress={leadingAction}>
          <IconComponent
            name={leadingButton}
            size={30}
            color={colors.amber[500]}
          />
        </TouchableOpacity>
      )
  }
  function getTrailingButton() {
    if (trailingAction && trailingButton)
      return (
        <TouchableOpacity onPress={trailingAction}>
          <IconComponent
            name={trailingButton}
            size={30}
            color={colors.amber[500]}
          />
        </TouchableOpacity>
      )
  }
  return (
    <View
      className='flex-row justify-between items-center pb-5'
      {...rest}>
      <View className='w-10 h-10 justify-center items-center'>{getLeadingButton()}</View>

      <Text
        className=' flex-1 text-white text-lg mx-6 font-primaryRegular text-center '
        lineBreakMode='middle'
        numberOfLines={1}>
        {children}
      </Text>
      <View className='w-10 h-10 justify-center items-center'>{getTrailingButton()}</View>
    </View>
  )
}

export default styled(HeaderComponent)
