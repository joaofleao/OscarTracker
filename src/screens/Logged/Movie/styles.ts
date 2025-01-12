import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { useTheme } from '@features/theme'

type StylesReturn = {
  contentContainer: ViewStyle
  spoilerPoster: ViewStyle
  mainContent: ViewStyle
  basicData: ViewStyle
  startSpoiler: ViewStyle
  iconInformation: ViewStyle
  iconInformationText: TextStyle
  carousselHeader: ViewStyle

  title: TextStyle
  subTitle: TextStyle
  plot: TextStyle
  list: ViewStyle
  cast: ViewStyle
  castSpoiler: ViewStyle
  castImage: ImageStyle
  castName: TextStyle
  castCharacter: TextStyle
  castImageContainer: ViewStyle
  castNoImage: TextStyle
  provider: ImageStyle
  emptyState: TextStyle
  nomination: ViewStyle
  nominationText: TextStyle
}

const useStyles = (): StylesReturn => {
  const { colors, fonts } = useTheme()
  return StyleSheet.create({
    contentContainer: {
      paddingHorizontal: 20,
      flex: 1,
      gap: 20,
      marginBottom: 20,
    },
    spoilerPoster: {
      flex: 1,
      maxWidth: '70%',
    },
    mainContent: {
      flexDirection: 'row',
      flex: 1,
      gap: 16,
      justifyContent: 'space-around',
    },
    basicData: {
      paddingVertical: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flex: 1,
      maxWidth: '20%',
    },
    startSpoiler: {
      width: '100%',
      maxWidth: 100,
      minWidth: 64,
    },
    iconInformation: {
      flexDirection: 'column',
      paddingHorizontal: 12,
      paddingVertical: 12,
      width: '100%',
      maxWidth: 100,
      minWidth: 64,

      backgroundColor: colors.background.container,
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
    },
    iconInformationText: {
      color: colors.text.default,
      fontFamily: fonts.primary.bold,
      fontSize: 16,
    },

    carousselHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      fontFamily: fonts.primary.bold,
      color: colors.text.default,
      fontSize: 24,
      lineHeight: 32,
    },
    subTitle: {
      fontFamily: fonts.primary.bold,
      color: colors.text.default,
      fontSize: 16,
      lineHeight: 20,
      flex: 1,
    },

    plot: {
      color: colors.text.default,
      fontFamily: fonts.primary.regular,
      fontSize: 14,
      lineHeight: 20,

      letterSpacing: 1,
      textAlign: 'justify',
    },

    list: {
      marginHorizontal: 20,
    },

    cast: {
      gap: 8,
      width: 106,
    },
    castSpoiler: {
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
    },

    castImage: {
      width: 106,
      height: 158,
    },

    castName: {
      color: colors.text.default,
      fontFamily: fonts.primary.bold,
      fontSize: 16,
      width: '100%',
    },

    castCharacter: {
      color: colors.text.default,
      fontFamily: fonts.primary.regular,
      fontSize: 14,
      textAlign: 'justify',
      paddingBottom: 4,
    },

    castImageContainer: {
      backgroundColor: colors.background.container,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },

    castNoImage: {
      position: 'absolute',
      fontFamily: fonts.primary.bold,
      color: colors.text.disabled,
    },

    provider: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginBottom: 2,
      backgroundColor: colors.background.container,
    },

    emptyState: {
      fontFamily: fonts.primary.bold,
      color: colors.text.disabled,
    },

    nomination: {
      gap: 4,
      flexDirection: 'row',
      backgroundColor: colors.background.container,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
    },

    nominationText: {
      fontFamily: fonts.primary.bold,
      color: colors.text.default,
    },
  })
}

export default useStyles
