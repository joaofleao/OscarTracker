import { TouchableOpacity, Text, View } from 'react-native'
import { IconComponent } from '../../components'
import { styled } from 'nativewind'

import colors from 'tailwindcss/colors'

interface ButtonProps {
  appearance?: 'primary' | 'secondary' | 'dark' | 'light'
  name?: string
  size?: 'small' | 'medium' | 'big' | 'full'
  variant?: 'plain' | 'filled' | 'outlined'
  disabled?: boolean
  loading?: boolean
  onPress?: () => void
  icon?: string
  iconPositon?: 'trailing' | 'leading'
}

function ButtonComponent({ name, onPress, variant = 'filled', iconPositon, icon, ...rest }: ButtonProps) {
  const plain = variant === 'plain'
  const outlined = variant === 'outlined'
  const filled = variant === 'filled'

  function getColor() {
    if (plain) return colors.amber[500]
    if (outlined) return colors.amber[500]
    if (filled) return colors.zinc[900]
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={` justify-center py-4
        ${icon && iconPositon === undefined ? 'px-0' : 'px-4'}
        ${name ? 'rounded-3xl' : 'rounded-2xl '}
        ${plain && ''}
        ${outlined && 'border-solid border-2 border-amber-500'}
        ${filled && 'bg-amber-500'}
        `}
      {...rest}>
      <View className='flex-row justify-center items-center '>
        {icon && iconPositon === 'leading' && (
          <IconComponent
            name={icon}
            size={24}
            color={getColor()}
            className={name && 'mr-3'}
          />
        )}

        <Text
          className={`mt-1 text-lg font-primaryBold text-center`}
          style={{ color: getColor() }}
          numberOfLines={1}>
          {name}
        </Text>

        {icon && iconPositon === 'trailing' && (
          <IconComponent
            name={icon}
            size={24}
            color={getColor()}
            className={name && 'ml-3'}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default styled(ButtonComponent)
