import { FlatList, ListRenderItemInfo, View } from 'react-native'

import NominationItem from '../NominationItem'
import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import { EditionContextType } from '@features/edition/EditionContext'
import { UserContextType } from '@features/user/UserContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Category, ScreenTypes } from '@types'
import routes from '@utils/routes'

const NominationCaroussel = (
  object: ListRenderItemInfo<Category>,
  navigation: NativeStackNavigationProp<ScreenTypes, 'Home', undefined>,
  edition: EditionContextType,
  user: UserContextType,
): JSX.Element => {
  const { item: nomination } = object

  const categoryId = nomination[0]
  const data = nomination[1]

  const renderNominationItem = (item): JSX.Element => {
    return NominationItem(item, navigation, edition, user)
  }

  const handleSeeMore = (): void => {
    navigation.navigate(routes.logged.category, { categoryId })
  }

  return (
    <View>
      <Styled.Header>
        <Styled.Title>{data['en-US']}</Styled.Title>
        <Button
          label="expand"
          variant="action"
          onPress={handleSeeMore}
        />
      </Styled.Header>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={edition.nominations[categoryId]}
        renderItem={renderNominationItem}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
        ListHeaderComponent={Global.Separator}
      />
    </View>
  )
}

export default NominationCaroussel
