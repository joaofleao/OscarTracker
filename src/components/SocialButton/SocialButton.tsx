import { Text, type TouchableOpacityProps } from 'react-native'

import { Facebook, Google } from '../../assets/images'
import * as Styled from './styles'

export interface SocialButtonProps extends TouchableOpacityProps {
  name: string
}

const SocialButton = (props: SocialButtonProps): JSX.Element => {
  const { name, ...rest } = props

  const getIcon = (): JSX.Element => {
    if (name === 'Facebook') return <Facebook />
    if (name === 'Google') return <Google />
    return <Text>{name}</Text>
  }

  return <Styled.Container {...rest}>{getIcon()}</Styled.Container>
}

export default SocialButton
