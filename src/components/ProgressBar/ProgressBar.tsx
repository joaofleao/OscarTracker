import React from 'react'
import { Animated, type LayoutChangeEvent, Text, View, type ViewProps } from 'react-native'

import useStyles from './styles'

export interface ProgressBarProps extends ViewProps {
  total: number
  progress: number
}

const defaultValues: Partial<ProgressBarProps> = {
  total: 0,
  progress: 0,
}

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  const { total, progress, ...rest } = { ...defaultValues, ...props }
  const styles = useStyles()

  const xCord = React.useRef(new Animated.Value(0)).current
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    if (total > 0)
      Animated.spring(xCord, {
        toValue: progress / total,
        useNativeDriver: true,
      }).start()
  }, [progress, total, xCord])

  return (
    <View
      style={styles.container}
      {...rest}
    >
      <Text style={styles.number}>{progress}</Text>
      <View style={styles.track}>
        <Animated.View
          onLayout={(e: LayoutChangeEvent): void => {
            setWidth(e.nativeEvent.layout.width)
          }}
          style={[styles.progress, { left: -(width / 2), transform: [{ scaleX: xCord }] }]}
        />
      </View>
      <Text style={styles.number}>{total}</Text>
    </View>
  )
}

export default ProgressBar
