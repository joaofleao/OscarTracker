import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  header: ViewStyle
  container: ViewStyle
  content: ViewStyle
  poster: ImageStyle
  plot: TextStyle
  castList: ViewStyle
  cast: ViewStyle
  castImage: ImageStyle
  castText: ViewStyle
  castName: TextStyle
  castCharacter: TextStyle
  rating: ViewStyle
  ratingText: TextStyle
}

const useStyles = (): StylesReturn => {
  const { colors, fonts } = useTheme()
  return StyleSheet.create({
    header: {
      gap: 12,
    },
    container: {
      flex: 1,
      gap: 32,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
    },
    poster: {
      width: 228,
      height: 338,
      borderRadius: 12,
    },
    plot: {
      color: colors.text.default,
      fontFamily: fonts.primary.regular,
      fontSize: 16,
      textAlign: 'justify',
    },
    castList: {
      flexDirection: 'row',
      gap: 20,
    },
    cast: {
      gap: 8,
    },
    castImage: {
      width: 106,
      height: 158,
      borderRadius: 12,
    },
    castText: {
      gap: 4,
    },
    castName: {
      color: colors.text.default,
      fontFamily: fonts.primary.bold,
      fontSize: 16,
      textAlign: 'justify',
    },
    castCharacter: {
      fontFamily: fonts.primary.regular,
      fontSize: 14,
      textAlign: 'justify',
      paddingBottom: 4,
    },
    rating: {
      color: colors.text.default,
      backgroundColor: colors.primary.shades.shade5,
      fontFamily: fonts.primary.regular,
      fontSize: 14,
      gap: 8,

      paddingHorizontal: 20,
      paddingVertical: 16,
      alignItems: 'center',
    },
    ratingText: {
      fontFamily: fonts.primary.bold,
      fontSize: 20,
      textAlign: 'justify',
      paddingBottom: 4,
    },
  })
}

export default useStyles

// export const Header = styled.View(() => {
// export const Container = styled.View(() => {
// export const Content = styled.View(() => {
// export const Poster = styled.Image(() => {
// export const Plot = styled.Text((props) => {
// export const CastList = styled.View(() => {
// export const Cast = styled.View(() => {
// export const CastImage = styled.Image(() => {
// export const CastText = styled.View(() => {
// export const CastName = styled.Text((props) => {
// export const CastCharacter = styled.Text((props) => {
// export const Rating = styled.View((props) => {
// export const RatingText = styled.Text((props) => {
