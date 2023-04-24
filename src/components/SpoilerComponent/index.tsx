import React, { useEffect, useRef, useState } from 'react'
import { Animated, Pressable, type PressableProps, Text } from 'react-native'

interface SpoilerComponentProps extends PressableProps {
  children: any
  show: boolean
  watched: boolean
  text?: string
}

const SocialButtonComponent = ({ children, show, watched, text, ...rest }: SpoilerComponentProps): JSX.Element => {
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
      {...rest}
      className="h-fit w-fit items-center justify-center rounded-xl overflow-hidden relative"
      onPress={() => {
        setHidden((value) => !value)
      }}
    >
      {children}

      {!watched && !show && (
        <Animated.View
          className="w-full h-full absolute bg-[#1e1e21] justify-center items-center"
          style={{ transform: [{ translateY: animatedValue }] }}
        >
          <Text className="text-white font-primaryBold text-center px-1">{text != null || 'Click to show'}</Text>
        </Animated.View>
      )}
    </Pressable>
  )
}

export default SocialButtonComponent
