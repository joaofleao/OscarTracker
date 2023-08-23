import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, View, type ViewProps } from 'react-native'
import { styled } from 'nativewind'

export interface ProgressBarProps extends ViewProps {
  total: number
  progress: number
  animated?: boolean
}

const ProgressBar = ({ total, progress, animated, ...props }: ProgressBarProps): JSX.Element => {
  const animatedValue = useRef(new Animated.Value(-1000))
  const reactive = useRef(new Animated.Value(-1000)).current
  const [width, setWidth] = useState(0)

  useEffect(() => {
    Animated.timing(animatedValue.current, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [])

  useEffect(() => {
    reactive.setValue(-width + (width * progress) / total)
  }, [progress, width])

  if (animated != null && animated)
    return (
      <View
        className="flex-row justify-between mx-4 items-center"
        {...props}
      >
        <View>
          <Text className="text-zinc-600 mr-3 font-primaryRegular ">{progress}</Text>
        </View>
        <View className="bg-zinc-800 h-2 flex-1 rounded-3xl overflow-hidden">
          {animatedValue != null && (
            <Animated.View
              onLayout={(e) => {
                setWidth(e.nativeEvent.layout.width)
              }}
              style={{ transform: [{ translateX: animatedValue.current }] }}
              className="bg-amber-500 h-full w-full rounded-3xl absolute"
            />
          )}
        </View>
        <Text className="text-zinc-600 ml-4 font-primaryRegular ">{total}</Text>
      </View>
    )
  else
    return (
      <View
        className="flex-row justify-between mx-4 items-center"
        {...props}
      >
        <View>
          <Text className="text-zinc-600 mr-3 font-primaryRegular ">{progress}</Text>
        </View>
        <View className="bg-zinc-800 h-2 flex-1 rounded-3xl overflow-hidden">
          <View
            style={{ width: `${(progress / total) * 100}%` }}
            className="bg-amber-500 h-full rounded-3xl absolute"
          />
        </View>
        <Text className="text-zinc-600 ml-4 font-primaryRegular ">{total}</Text>
      </View>
    )
}

export default styled(ProgressBar)
