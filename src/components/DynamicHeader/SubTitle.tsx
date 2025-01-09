import { Text, TextProps } from 'react-native'

import useStyles from './styles'

const SubTitle = (props: TextProps): JSX.Element => {
  const styles = useStyles()
  return (
    <Text
      style={styles.subTitle}
      {...props}
    />
  )
}
export default SubTitle
