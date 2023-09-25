import React from 'react'

import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import { useAuth } from '@features/auth'
import { useToast } from '@features/toast'
import { useUser } from '@features/user'
import type { PasswordProps } from '@types'
import routes from '@utils/routes'

const Password = ({ navigation }: PasswordProps): JSX.Element => {
  const user = useUser()
  const auth = useAuth()
  const toast = useToast()
  const [countdown, setCountdown] = React.useState(0)
  const [firstTime, setFirstTime] = React.useState(true)
  const [loading, setLoading] = React.useState(false)

  const handleNext = (): void => {
    auth.user.reload()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)

      if (!auth.user.emailVerified)
        toast.showToast(
          'Email not verified',
          'Enter in the link sent to your email to continue using the app',
          'error',
        )
      else if (!user.onboarding) navigation.navigate(routes.logged.preferences)
      else navigation.navigate(routes.logged.home)
    }, 3000)
  }

  const handleExit = (): void => {
    auth.signOut()
  }

  const handleSend = (): void => {
    auth.verifyEmail()
    setFirstTime(false)
    setCountdown(120)
  }

  React.useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
  }, [countdown])

  return (
    <Global.Screen>
      <Styled.Header>
        <Global.Title>Looks like you have not yet verified your email</Global.Title>
        <Global.Description>
          Check your inbox and spam at {user.email} to continue using the app
        </Global.Description>
      </Styled.Header>
      <Styled.Content>
        <Button
          width="fixed"
          label={firstTime ? 'Send Verification Email' : 'Resend Verification Email'}
          variant="primary"
          loading={countdown > 0}
          disabled={countdown > 0}
          onPress={handleSend}
        />
        {countdown > 0 && (
          <Styled.Helper>
            Resend in<Styled.Countdown> {countdown} </Styled.Countdown>
            seconds
          </Styled.Helper>
        )}
      </Styled.Content>

      <Styled.Footer>
        <Button
          width="fixed"
          label="Not your account?"
          variant="secondary"
          onPress={handleExit}
        />
        <Button
          width="fixed"
          loading={loading}
          label="Done!"
          onPress={handleNext}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default Password
