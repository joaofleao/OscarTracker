import { Text, TextProps } from 'react-native'

import useStyles from './styles'

interface DescriptionProps extends TextProps {
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

const Description = ({
  align = 'center',
  bigHeader = false,
  ...props
}: DescriptionProps): JSX.Element => {
  const styles = useStyles({ align, bigHeader })

  return (
    <Text
      style={[styles.root]}
      {...props}
    />
  )
}

export default Description
