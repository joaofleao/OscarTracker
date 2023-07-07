import React from 'react'

import * as Styled from './styles'

export interface MarginProps {
  mt?: string
  mb?: string
  mr?: string
  ml?: string

  mv?: string
  mh?: string
}

export interface WrapperProps extends MarginProps {
  children: JSX.Element
}

const defaultValue = {
  mt: '0px',
  mb: '0px',
  mr: '0px',
  ml: '0px',
}

const Button = (props: WrapperProps): JSX.Element => {
  const { children, ...rest } = { ...defaultValue, ...props }

  return <Styled.Wrapper {...rest}>{children}</Styled.Wrapper>
}

export default Button
