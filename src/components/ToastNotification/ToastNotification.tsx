import type { Animated, ViewProps } from 'react-native'

import Icon from '../../components/Icon'
import useTheme from '../../features/theme/useTheme'
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
      {isSuccess ? (
        <Icon.CheckCircle
          color={theme.palette.text.default}
          size={30}
        />
      ) : (
        <Icon.AlertCircle
          color={theme.palette.text.default}
          size={30}
        />
      )}

      <Styled.Informations>
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
        {description != null && <Styled.Description>{description}</Styled.Description>}
      </Styled.Informations>
    </Styled.Container>
  )
}

export default ToastNotification
