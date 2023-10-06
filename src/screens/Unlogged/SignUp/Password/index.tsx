import { useEffect, useRef, useState } from 'react'
import { Animated, ScrollView } from 'react-native'

import * as Styled from './styles'
import Button from '@components/Button'
import PasswordField from '@components/FormFields/PasswordField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import useKeyboard from '@hooks/useKeyboard'
import usePasswordRequirements from '@hooks/usePasswordRequirements'
import useScreenInsets from '@hooks/useScreenInsets'
import type { PasswordProps } from '@types'
import routes from '@utils/routes'

const Password = ({ navigation, route }: PasswordProps): JSX.Element => {
  const keyboardOpen = useKeyboard()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { bottom } = useScreenInsets()

  const { passwordValid, confirmPasswordValid } = usePasswordRequirements(password, confirmPassword)

  const animation = useRef<Animated.Value>(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(animation, {
      toValue: keyboardOpen ? 1 : 0,
      useNativeDriver: true,
    }).start()
  }, [keyboardOpen, animation])

  const transform = [
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 400],
      }),
    },
  ]

  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpName, {
      ...route.params,
      password,
    })
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          variant="secondary"
        />
        <Header.TextContainer>
          <Header.Title>Register</Header.Title>
        </Header.TextContainer>
      </Header.Root>

      <ScrollView
        contentContainerStyle={Styled.styles.contentContainerStyle}
        indicatorStyle="black"
        automaticallyAdjustKeyboardInsets
      >
        <Styled.Header>
          <Global.Title>How about some security?</Global.Title>
          <Global.Description>Make sure to use a strong password.</Global.Description>
        </Styled.Header>

        <Styled.Content>
          <PasswordField
            value={password}
            onChangeText={setPassword}
            type="password"
          />
          <PasswordField
            passwordConfirmation={password}
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            type="confirmPassword"
          />
        </Styled.Content>
      </ScrollView>

      <Styled.Footer style={{ transform, bottom }}>
        <Button
          width="fixed"
          disabled={!passwordValid || !confirmPasswordValid}
          label="Next"
          onPress={handleNext}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default Password
