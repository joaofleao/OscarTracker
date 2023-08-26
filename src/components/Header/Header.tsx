import { type ViewProps } from 'react-native'

import Button from '../Button'
import * as Styled from './styles'

export interface HeaderProps extends ViewProps {
  title?: string
  description?: string
  leadingButton?: string
  trailingButton?: string
  leadingAction?: () => void
  trailingAction?: () => void
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

const defaultValue = {
  align: 'center',
  bigHeader: false,
}

const Header = (props: HeaderProps): JSX.Element => {
  const {
    description,
    bigHeader,
    title,
    leadingAction,
    leadingButton,
    trailingAction,
    trailingButton,
    align,
    ...rest
  } = { ...defaultValue, ...props }
  const hasLeadingButton =
    (leadingButton !== undefined && leadingAction !== undefined && leadingButton !== '') || false
  const hasTrailingButton =
    (trailingButton !== undefined && trailingAction !== undefined && trailingButton !== '') || false
  const hasTitle = (title !== undefined && title !== '') || false
  const hasDescription = (description !== undefined && description !== '') || false

  return (
    <Styled.Container {...rest}>
      {align === 'center' && !hasLeadingButton && hasTrailingButton && <Styled.ButtonContainer />}
      {hasLeadingButton && (
        <Styled.ButtonContainer>
          <Button
            icon={leadingButton}
            onPress={leadingAction}
            width="fit"
            variant="secondary"
          />
        </Styled.ButtonContainer>
      )}
      {(hasTitle || hasDescription) && (
        <Styled.TextContainer
          bigHeader={bigHeader}
          align={align}
          leadingButton={hasLeadingButton}
          trailingButton={hasTrailingButton}
        >
          {hasTitle && (
            <Styled.Title
              align={align}
              bigHeader={bigHeader}
              numberOfLines={bigHeader ? 2 : 0}
            >
              {title}
            </Styled.Title>
          )}

          {hasDescription && (
            <Styled.Description
              align={align}
              bigHeader={bigHeader}
              numberOfLines={bigHeader ? 2 : 0}
            >
              {description}
            </Styled.Description>
          )}
        </Styled.TextContainer>
      )}
      {align === 'center' && !hasTrailingButton && hasLeadingButton && <Styled.ButtonContainer />}

      {hasTrailingButton && (
        <Styled.ButtonContainer>
          <Button
            icon={trailingButton}
            onPress={trailingAction}
            width="fit"
            variant="secondary"
          />
        </Styled.ButtonContainer>
      )}
    </Styled.Container>
  )
}

export default Header
