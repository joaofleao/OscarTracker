import React from 'react'
import { type ViewProps } from 'react-native'

import ButtonComponent from '../ButtonComponent'
import * as Styled from './styles'
interface HeaderProps extends ViewProps {
  title?: string
  description?: string
  leadingButton?: string
  trailingButton?: string
  leadingAction?: () => void
  trailingAction?: () => void
  align: 'left' | 'center' | 'right'
  bigHeader: boolean
}

const defaultValue = {
  align: 'center',
  bigHeader: false,
}

const HeaderComponent = (props: HeaderProps): JSX.Element => {
  const { description, bigHeader, title, leadingAction, leadingButton, trailingAction, trailingButton, align, ...rest } = props
  const hasLeadingButton = (leadingButton !== undefined && leadingAction !== undefined) || false
  const hasTrailingButton = (trailingButton !== undefined && trailingAction !== undefined) || false
  const hasTitle = title !== undefined || false
  const hasDescription = description !== undefined || false

  return (
    <Styled.Container {...rest}>
      {align === 'center' && !hasLeadingButton && hasTrailingButton && <Styled.ButtonContainer />}
      {hasLeadingButton && (
        <Styled.ButtonContainer>
          <ButtonComponent
            icon={leadingButton}
            onPress={leadingAction}
            width="fit"
            variant="secondary"
          />
        </Styled.ButtonContainer>
      )}
      {(hasTitle || hasDescription) && (
        <Styled.TextContainer
          align={align}
          leadingButton={hasLeadingButton}
          trailingButton={hasTrailingButton}
        >
          {hasTitle && (
            <Styled.Title
              align={align}
              bigHeader={bigHeader}
              numberOfLines={!bigHeader && 2}
            >
              {title}
            </Styled.Title>
          )}

          {hasDescription && (
            <Styled.Description
              align={align}
              bigHeader={bigHeader}
              numberOfLines={!bigHeader && 2}
            >
              {description}
            </Styled.Description>
          )}
        </Styled.TextContainer>
      )}
      {align === 'center' && !hasTrailingButton && hasLeadingButton && <Styled.ButtonContainer />}

      {hasTrailingButton && (
        <Styled.ButtonContainer>
          <ButtonComponent
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

HeaderComponent.defaultProps = defaultValue

export default HeaderComponent
