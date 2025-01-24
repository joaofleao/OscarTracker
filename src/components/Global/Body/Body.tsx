import { ScrollView, ScrollViewProps } from 'react-native'

import useStyles from './styles'

const Body = (props: ScrollViewProps): JSX.Element => {
  const styles = useStyles()

  return (
    <ScrollView
      contentContainerStyle={styles.body}
      automaticallyAdjustKeyboardInsets
      {...props}
    />
  )
}

export default Body
