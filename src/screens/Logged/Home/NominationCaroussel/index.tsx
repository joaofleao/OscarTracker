import { FlatList } from 'react-native'

import NominationItem from '../NominationItem'
import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import { useBallots } from '@features/ballots'
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
  const { nominations, winners } = useEdition()

  const { bets } = useBallots()

  const sortedData = nominations?.[categoryId]?.sort((x, y) => {
    return x.id === winners?.[x.category] ? -1 : y.id === winners?.[y.category] ? 1 : 0
  })

  const first = sortedData?.[0]?.id === bets?.[categoryId]?.first
  const second = sortedData?.[0]?.id === bets?.[categoryId]?.second

  const renderNominationItem = ({ item }): JSX.Element => {
    return (
      <NominationItem
        nomination={item}
        winnerTitle={first ? '100 points' : second ? '50 points' : '0 points'}
        winnerDescription={first ? '1st guess' : second ? '2nd guess' : undefined}
      />
    )
  }

  const handleSeeMore = (): void => {
    navigation.navigate(routes.logged.category, { categoryId })
  }

  return (
    <Styled.Caroussel>
      <Styled.Header>
        <Styled.Title>{categories[categoryId]['en-US']}</Styled.Title>
        <Button
          label="vote"
          size="action"
          variant="secondary"
          onPress={handleSeeMore}
        />
      </Styled.Header>
      <Styled.List
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sortedData}
        renderItem={renderNominationItem}
        ItemSeparatorComponent={Global.Separator}
        ListHeaderComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
      />
    </Styled.Caroussel>
  )
}

export default NominationCaroussel
