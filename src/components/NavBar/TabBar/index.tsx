import React from 'react'

import * as Styled from './styles'
import { useTheme } from '@features'
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

export interface Props extends BottomTabBarButtonProps {
  icon: JSX.Element
}

const Tab = (props: Props): JSX.Element => {
  const { icon, accessibilityState, ...rest } = props
  delete rest.style
  delete rest.onLayout

  const { palette } = useTheme()

  const selected: boolean = accessibilityState.selected

  return (
    <Styled.Container {...rest}>
      {React.cloneElement(icon, {
        width: 20,
        height: 20,
        filled: selected,
        color: selected ? palette.primary.default : palette.primary.shades.shade60,
      })}
    </Styled.Container>
  )
}

Tab.displayName = 'Tab'

export default Tab
