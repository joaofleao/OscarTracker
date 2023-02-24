import React, { useEffect, useRef, useState } from 'react'
import { Pressable, View, Text, Animated } from 'react-native'

interface SpoilerButton {
  children: any
  show: boolean
  watched: boolean
}

function SocialButtonComponent({ children, show, watched }: SpoilerButton) {
  const [hidden, setHidden] = useState<boolean>(false)
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: hidden ? -400 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [hidden])

  return (
    <Pressable
      className='h-fit w-fit items-center justify-center rounded-xl overflow-hidden relative'
      onPress={() => setHidden(value => !value)}>
      {children}

      {!watched && !show && (
        <Animated.View
          className='w-full h-full absolute bg-[#1e1e21] justify-center items-center'
          style={{ transform: [{ translateY: animatedValue }] }}>
          <Text className='text-white font-primaryBold'>Click to see</Text>
        </Animated.View>
      )}
    </Pressable>
  )
}

export default SocialButtonComponent
