import React from 'react'
import { Pressable, type PressableProps, Text, View } from 'react-native'

import useStyles from './styles'

export interface CardProps extends PressableProps {
  title: string
  subtitle: string
  description?: string
  icon?: React.ReactNode
  image?: React.ReactNode
  bottomArea?: React.ReactNode
}

const Card = ({
  description,
  icon,
  image,
  subtitle,
  title,
  bottomArea,
  ...rest
}: CardProps): JSX.Element => {
  const styles = useStyles()

  return (
    <Pressable
      style={styles.root}
      {...rest}
    >
      {image}
      <View style={styles.content}>
        <View style={styles.content}>
          <View style={styles.rightContainer}>
            {icon}
            <Text
              style={styles.title}
              numberOfLines={3}
            >
              {title}
            </Text>
          </View>

          <Text
            style={styles.subtitle}
            numberOfLines={2}
          >
            {subtitle}
          </Text>

          {description && (
            <Text
              style={styles.description}
              numberOfLines={2}
            >
              {description}
            </Text>
          )}
        </View>
        {bottomArea}
      </View>
    </Pressable>
  )
}

export default Card
