import * as Styled from './styles'
import Icon from '@components/Icon'
import { useTheme } from '@features/theme'
import { useToast } from '@features/toast'

const ToastNotification = (): JSX.Element => {
  const { title, description, type, position } = useToast()

  const theme = useTheme()

  const isSuccess = type === 'success'

  return (
    <Styled.Container
      style={{ transform: [{ translateY: position }] }}
      isSuccess={isSuccess}
    >
      {isSuccess ? (
        <Icon.CheckCircle
          color={theme.colors.text.default}
          size={30}
        />
      ) : (
        <Icon.AlertCircle
          color={theme.colors.text.default}
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
