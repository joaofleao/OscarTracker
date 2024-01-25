import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native'

const Body = (props: ScrollViewProps): JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      indicatorStyle="black"
      automaticallyAdjustKeyboardInsets
      {...props}
    />
  )
}

export default Body

export const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})
