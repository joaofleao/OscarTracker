import React from 'react'
import { Animated, type LayoutChangeEvent, type ViewProps } from 'react-native'

import * as Styled from './styles'

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
    <Styled.Container {...rest}>
      <Styled.Number>{progress}</Styled.Number>
      <Styled.Track>
        <Styled.Progress
          onLayout={(e: LayoutChangeEvent): void => {
            setWidth(e.nativeEvent.layout.width)
          }}
          style={{ left: -(width / 2), transform: [{ scaleX: xCord }] }}
        />
      </Styled.Track>
      <Styled.Number>{total}</Styled.Number>
    </Styled.Container>
  )
}

export default ProgressBar
