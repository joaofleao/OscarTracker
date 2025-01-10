import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native'

import useStyles from './styles'
import { Facebook, Google } from '@assets/images'

export interface SocialButtonProps extends TouchableOpacityProps {
  name: string
}

const SocialButton = (props: SocialButtonProps): JSX.Element => {
  const { name, ...rest } = props
  const styles = useStyles()

  const getIcon = (): JSX.Element => {
    if (name === 'Facebook') return <Facebook />
    if (name === 'Google') return <Google />
    return <Text>{name}</Text>
  }

  return (
    <TouchableOpacity
      style={styles.root}
      {...rest}
    >
      {getIcon()}
    </TouchableOpacity>
  )
}

export default SocialButton
