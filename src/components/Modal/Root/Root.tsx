import { ModalProps as RNModalProps, View } from 'react-native'

import Background from '../Background'
import useStyles from './styles'

const Root = (props: RNModalProps): JSX.Element => {
  const { children } = { ...props }
  const styles = useStyles()

  return (
    <Background {...props}>
      <View style={styles.container}>{children}</View>
    </Background>
  )
}

export default Root
