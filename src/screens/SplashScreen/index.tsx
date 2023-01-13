import React, { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'

type Props = {
  isAppReady: boolean
  children: React.ReactNode
}

export default function SplashScreen({ children, isAppReady }: Props) {
  return (
    <>
      <Splash isAppReady={isAppReady} />
      {isAppReady && children}
    </>
  )
}

const LOADING_IMAGE = 'Loading image'
const FADE_IN_IMAGE = 'Fade in image'
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready'
const FADE_OUT = 'Fade out'
const HIDDEN = 'Hidden'

export const Splash = ({ isAppReady }: { isAppReady: boolean }) => {
  const containerOpacity = useRef(new Animated.Value(1)).current
  const imageOpacity = useRef(new Animated.Value(0)).current

  const [state, setState] = useState<
    typeof LOADING_IMAGE | typeof FADE_IN_IMAGE | typeof WAIT_FOR_APP_TO_BE_READY | typeof FADE_OUT | typeof HIDDEN
  >(LOADING_IMAGE)

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY)
      })
    }
  }, [imageOpacity, state])

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT)
      }
    }
  }, [isAppReady, state])

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 500,
        delay: 1000,
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN)
      })
    }
  }, [containerOpacity, state])

  if (state === HIDDEN) return null

  return (
    <Animated.View
      collapsable={false}
      className='bg-zinc-900 items-center justify-center h-full '
      style={{ opacity: containerOpacity }}>
      <Animated.Image
        source={require('../../assets/images/Logo/Logo.png')}
        fadeDuration={0}
        onLoad={() => {
          setState(FADE_IN_IMAGE)
        }}
        className='w-64 h-64'
        style={{ opacity: imageOpacity }}
        resizeMode='contain'
      />
    </Animated.View>
  )
}
