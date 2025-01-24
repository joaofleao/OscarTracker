import { FlatList } from 'react-native'

import NominationCaroussel from './NominationCaroussel'
import Global from '@components/Global'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import type { HomeProps } from '@types'

const Home = ({ navigation: _ }: HomeProps): JSX.Element => {
  const edition = useEdition()

  const { categories_list } = useCategories()

  const renderNominationCaroussel = ({ item }): JSX.Element => {
    if (edition?.categories?.includes(item)) return <NominationCaroussel categoryId={item} />
  }

  return (
    <Global.Screen isTabScreen>
      <FlatList
        data={categories_list}
        renderItem={renderNominationCaroussel}
        ItemSeparatorComponent={Global.Separator}
        ListHeaderComponent={Global.HeaderBarSeparator}
        ListFooterComponent={Global.NavBarSeparator}
        stickyHeaderIndices={[0]}
      />
    </Global.Screen>
  )
}

export default Home
