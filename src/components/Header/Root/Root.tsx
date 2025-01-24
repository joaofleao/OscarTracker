import { View, ViewProps } from 'react-native'

import useStyles from './styles'

interface RootProps extends ViewProps {
  align?: 'center' | 'left' | 'right' | 'between'
}

const Root = ({ align = 'center', ...props }: RootProps): JSX.Element => {
  const styles = useStyles()

  return (
    <View
      style={[
        styles.root,

        align === 'left' && styles.left,
        align === 'between' && styles.between,
        align === 'center' && styles.center,
        align === 'right' && styles.right,
      ]}
      {...props}
    />
  )
}

export default Root
