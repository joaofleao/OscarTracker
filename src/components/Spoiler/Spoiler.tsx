import { useEffect, useRef, useState } from 'react'
import { Animated, Pressable, type PressableProps, Text } from 'react-native'
import { BlurView } from 'expo-blur'

import useStyles from './styles'

export interface SpoilerProps extends PressableProps {
  children: JSX.Element | JSX.Element[]
  show?: boolean
  watched?: boolean
  text?: string
}

const defaultValues = {
  text: 'Click to show',
}

const Spoiler = (props: SpoilerProps): JSX.Element => {
  const { children, show, watched, text, ...rest } = { ...defaultValues, ...props }

  const [hidden, setHidden] = useState<boolean>(false)
  const animatedValue = useRef(new Animated.Value(0)).current
  const styles = useStyles()

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: hidden ? -500 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [hidden, animatedValue])

  return (
    <Pressable
      style={styles.container}
      onPress={(): void => {
        setHidden((value) => {
          return !value
        })
      }}
      {...rest}
    >
      {children}

      {!watched && !show && (
        <Animated.View
          style={[styles.movingBackground, { transform: [{ translateY: animatedValue }] }]}
        >
          <BlurView
            intensity={50}
            tint={'dark'}
            style={styles.blur}
          >
            <Text style={styles.title}>{text}</Text>
          </BlurView>
        </Animated.View>
      )}
    </Pressable>
  )
}

export default Spoiler
