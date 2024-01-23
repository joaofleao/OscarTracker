import React from 'react'
import { PressableProps } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@features/theme'

export interface Props extends PressableProps {
  icon: JSX.Element
  selected: boolean
}

const Tab = (props: Props): JSX.Element => {
  const { icon, selected, ...rest } = props

  const { colors } = useTheme()

  return (
    <Styled.Container {...rest}>
      {React.cloneElement(icon, {
        width: 20,
        height: 20,
        filled: selected,
        color: selected ? colors.background.container : colors.primary.default,
      })}
    </Styled.Container>
  )
}

Tab.displayName = 'Tab'

export default Tab
