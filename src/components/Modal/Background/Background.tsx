import {
  GestureResponderEvent,
  Modal as RNModal,
  ModalProps as RNModalProps,
  Pressable,
} from 'react-native'

import useStyles from './styles'

export interface ModalProps extends RNModalProps {
  onClickOutside?: () => void
}
const defaultProps = {
  onClickOutside: null,
}

const Background = (props: ModalProps): JSX.Element => {
  const { children, onClickOutside, ...rest } = { ...defaultProps, ...props }
  const styles = useStyles()

  const handleClickOutside = (event: GestureResponderEvent): void => {
    if (onClickOutside && event.target === event.currentTarget) onClickOutside()
  }
  return (
    <>
      <RNModal
        animationType="fade"
        transparent={true}
        {...rest}
      >
        <Pressable
          style={styles.background}
          onPress={handleClickOutside}
        >
          {children}
        </Pressable>
      </RNModal>
    </>
  )
}

export default Background
