import React from 'react'
import { GestureResponderEvent, type PressableProps } from 'react-native'

import * as Styled from './styles'
import Loading from '@components/Loading'
import { useTheme } from '@features/theme'
import usePressableAnimation from '@hooks/usePressableAnimation'

export interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text'
  loading?: boolean
  label?: string
  width?: 'fit' | 'fixed' | 'full'
  size?: 'default' | 'action'
  icon?: JSX.Element
}
const defaultValue: ButtonProps = {
  width: 'fit',
  variant: 'primary',
  loading: false,
  size: 'default',
}

const Button = (props: ButtonProps): JSX.Element => {
  const { label, width, variant, disabled, loading, icon, size, onPressIn, onPressOut, ...rest } = {
    ...defaultValue,
    ...props,
  }

  const theme = useTheme()

  const { animationPressIn, animationPressOut, opacity, scale } = usePressableAnimation({
    disabled,
  })

  const handlePressIn = (event: GestureResponderEvent): void => {
    animationPressIn()
    onPressIn?.(event)
  }

  const handlePressOut = (event: GestureResponderEvent): void => {
    animationPressOut()
    onPressOut?.(event)
  }

  const renderIcon =
    icon &&
    React.cloneElement(icon, {
      color: props.variant === 'primary' ? theme.colors.text.inverse : theme.colors.primary.default,
      width: 18,
      height: 18,
      variant,
    })

  const renderLabel = (
    <Styled.Label
      numberOfLines={1}
      variant={variant}
      size={size}
      disabled={disabled}
    >
      {label}
    </Styled.Label>
  )

  const renderLoading = (
    <Loading
      disabled={disabled}
      animation={'circle'}
      size={24}
      type={variant === 'primary' ? 'secondary' : 'primary'}
    />
  )

  const renderContent = icon && !label ? renderIcon : renderLabel

  return (
    <Styled.Container
      icon={!!icon}
      variant={variant}
      size={size}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      width={width}
      style={{ transform: [{ scale }], opacity }}
      {...rest}
    >
      <Styled.LoadingContent loading={loading}>{renderLoading}</Styled.LoadingContent>
      <Styled.Content loading={loading}>{renderContent}</Styled.Content>
    </Styled.Container>
  )
}

export default Button
