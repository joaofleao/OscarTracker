import React, { useEffect, useRef, useState } from 'react'
import { Animated, Pressable, Text, type View } from 'react-native'

type SpoilerComponentProps = React.ComponentProps<typeof View> & {
  children: any
  show: boolean
  watched: boolean
  text?: string
}

function SocialButtonComponent({ children, show, watched, text, ...rest }: SpoilerComponentProps) {
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
          <Text className="text-white font-primaryBold text-center px-1">{text || 'Click to show'}</Text>
        </Animated.View>
      )}
    </Pressable>
  )
}

export default SocialButtonComponent
