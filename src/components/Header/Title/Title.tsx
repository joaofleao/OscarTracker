import { Text, TextProps } from 'react-native'

import useStyles from './styles'

interface TitleProps extends TextProps {
  align?: 'left' | 'center' | 'right'
  bigHeader?: boolean
}

const Title = ({ align = 'center', bigHeader = false, ...props }: TitleProps): JSX.Element => {
  const styles = useStyles({ align, bigHeader })

  return (
    <Text
      style={[styles.root]}
      {...props}
    />
  )
}

export default Title
