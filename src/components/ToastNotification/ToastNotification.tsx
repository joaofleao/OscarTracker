import type { Animated, ViewProps } from 'react-native'

import { IconComponent } from '../../components'
import { useTheme } from '../../features'
import * as Styled from './styles'

export interface ToastNotificationProps extends ViewProps {
  title: string
  description: string
  type: string
  position: Animated.Value
}

const ToastNotification = (props: ToastNotificationProps): JSX.Element => {
  const { title, description, type, position, ...rest } = props
  const theme = useTheme()
  const isSuccess = type === 'success'

  return (
    <Styled.Container
      style={{ transform: [{ translateY: position }] }}
      isSuccess={isSuccess}
      {...rest}
    >
      <IconComponent
        name={isSuccess ? 'check-circle' : 'alert-circle'}
        color={theme.palette.text.default}
        size={30}
      />

      <Styled.Informations>
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
        {description != null && <Styled.Description>{description}</Styled.Description>}
      </Styled.Informations>
    </Styled.Container>
  )
}

export default ToastNotification
