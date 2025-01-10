import {
  GestureResponderEvent,
  Modal as RNModal,
  ModalProps as RNModalProps,
  Pressable,
  View,
} from 'react-native'

import useStyles from './styles'

export interface ModalProps extends RNModalProps {
  onClickOutside?: () => void
}
const defaultProps = {
  onClickOutside: null,
}

const Root = (props: ModalProps): JSX.Element => {
  const { children, onClickOutside, ...rest } = { ...defaultProps, ...props }
  const styles = useStyles()

  const handleClickOutside = (event: GestureResponderEvent): void => {
    if (onClickOutside && event.target === event.currentTarget) onClickOutside()
  }
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      {...rest}
    >
      <Pressable
        style={styles.root}
        onPress={handleClickOutside}
      >
        <View style={styles.container}>{children}</View>
      </Pressable>
    </RNModal>
  )
}

export default Root
