import { FlatList, View } from 'react-native'

import NominationItem from '../NominationItem'
import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ScreenTypes } from '@types'
import routes from '@utils/routes'

interface NominationCarousselProps {
  categoryId: string
}

const NominationCaroussel = (props: NominationCarousselProps): JSX.Element => {
  const { categoryId } = props
  const { categories } = useCategories()
  const navigation = useNavigation<NativeStackNavigationProp<ScreenTypes, 'logged'>>()
  const { nominations } = useEdition()

  const renderNominationItem = ({ item }): JSX.Element => {
    return <NominationItem nomination={item} />
  }

  const handleSeeMore = (): void => {
    navigation.navigate(routes.logged.category, { categoryId })
  }

  return (
    <View>
      <Styled.Header>
        <Styled.Title>{categories[categoryId]['en-US']}</Styled.Title>
        <Button
          label="expand"
          size="action"
          variant="secondary"
          onPress={handleSeeMore}
        />
      </Styled.Header>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={nominations[categoryId]}
        renderItem={renderNominationItem}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
        ListHeaderComponent={Global.Separator}
      />
    </View>
  )
}

export default NominationCaroussel
