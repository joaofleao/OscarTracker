import { Animated } from 'react-native'

import useStyles from './styles'

export interface DynamicHeader {
  scrollOffsetY: Animated.Value
  children?: JSX.Element | JSX.Element[]
  size?: number
}
const defaultValue: DynamicHeader = {
  scrollOffsetY: new Animated.Value(0),
  size: 120,
}

const DynamicHeader = (props: DynamicHeader): JSX.Element => {
  const { scrollOffsetY, children, size } = { ...defaultValue, ...props }
  const styles = useStyles()
  const height = scrollOffsetY.interpolate({
    inputRange: [0, size],
    outputRange: [size, 0],
    extrapolate: 'clamp',
  })
  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, size / 2, size],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  })

  return (
    <Animated.View style={[styles.dynamicHeader, { height, opacity }]}>{children}</Animated.View>
  )
}
export default DynamicHeader
