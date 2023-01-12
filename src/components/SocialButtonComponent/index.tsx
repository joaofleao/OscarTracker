import { TouchableOpacity, Text } from 'react-native'
import { styled } from 'nativewind'
import { Google, Facebook } from '../../assets/images'

interface SocialButtonProps {
  name: string
  onPress?: () => void
}

function SocialButtonComponent({ name, onPress, ...rest }: SocialButtonProps) {
  function getIcon() {
    if (name === 'Facebook') return <Facebook />
    if (name === 'Google') return <Google />
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className='h-10 w-10 rounded-full items-center justify-center '
      {...rest}>
      {getIcon()}
    </TouchableOpacity>
  )
}

export default styled(SocialButtonComponent)
