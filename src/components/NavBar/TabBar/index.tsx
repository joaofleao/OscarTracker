import React from 'react'
import { Pressable, PressableProps } from 'react-native'

import useStyles from './styles'
import { useTheme } from '@features/theme'

export interface Props extends PressableProps {
  icon: JSX.Element
  selected: boolean
}

const Tab = (props: Props): JSX.Element => {
  const { icon, selected, ...rest } = props
  const { colors } = useTheme()
  const styles = useStyles()
  return (
    <Pressable
      style={styles.root}
      {...rest}
    >
      {React.cloneElement(icon, {
        width: 20,
        height: 20,
        filled: selected,
        color: selected ? colors.background.container : colors.primary.default,
      })}
    </Pressable>
  )
}

Tab.displayName = 'Tab'

export default Tab
