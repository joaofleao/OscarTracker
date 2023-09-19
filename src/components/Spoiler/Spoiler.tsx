import { useEffect, useRef, useState } from 'react'
import { Animated, type PressableProps } from 'react-native'

import * as Styled from './styles'

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

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: hidden ? -400 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [hidden, animatedValue])

  return (
    <Styled.Container
      onPress={(): void => {
        setHidden((value) => {
          return !value
        })
      }}
      {...rest}
    >
      {children}
      {!watched && !show && (
        <Styled.Background style={{ transform: [{ translateY: animatedValue }] }}>
          <Styled.Title>{text}</Styled.Title>
        </Styled.Background>
      )}
    </Styled.Container>
  )
}

export default Spoiler
