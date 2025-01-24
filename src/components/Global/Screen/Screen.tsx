import { View, ViewProps } from 'react-native'

import useStyles from './styles'

interface ScreenProps extends ViewProps {
  isTabScreen?: boolean
}

const Screen = ({ isTabScreen = false, ...props }: ScreenProps): JSX.Element => {
  const styles = useStyles({ isTabScreen })

  return (
    <View
      style={styles.screen}
      {...props}
    />
  )
}

export default Screen
