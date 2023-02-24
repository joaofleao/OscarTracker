import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Animated } from 'react-native'
import { styled } from 'nativewind'

interface ProgressBarProps {
  total: number
  progress: number
}

function ProgressBarComponent({ total, progress, ...rest }: ProgressBarProps) {
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
    reactive.setValue(-width + (width * progress) / total || 1)
  }, [progress, width])

  return (
    <View
      className='flex-row justify-between mx-5 items-center'
      {...rest}>
      <View>
        <Text className='text-zinc-600 mr-3 font-primaryRegular '>{progress}</Text>
      </View>
      <View className='bg-zinc-800 h-2 flex-1 rounded-3xl overflow-hidden'>
        {animatedValue && (
          <Animated.View
            onLayout={e => setWidth(e.nativeEvent.layout.width)}
            style={{ transform: [{ translateX: animatedValue.current }] }}
            className='bg-amber-500 h-full w-full rounded-3xl absolute'
          />
        )}
      </View>
      <Text className='text-zinc-600 ml-4 font-primaryRegular '>{total}</Text>
    </View>
  )
}

export default styled(ProgressBarComponent)
