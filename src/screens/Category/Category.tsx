import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import Card from './Card'
import useStyles from './styles'
import WinnerModal from './WinnerModal'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useBallots } from '@features/ballots'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { type CategoryProps, Nomination } from '@types'
import routes from '@utils/routes'

const Category = ({ navigation, route }: CategoryProps): JSX.Element => {
  const { categoryId } = route.params
  const { categories_map } = useCategories()
  const { user } = useUser()
  const styles = useStyles()

  const ballots = useBallots()

  const [wishes, setWishes] = React.useState(undefined)
  const [bets, setBets] = React.useState(undefined)

  const [newWinner, setNewWinner] = React.useState<[string, string] | null>(null)

  const upToDate = !(bets !== ballots.bets?.[categoryId] || wishes !== ballots.wishes?.[categoryId])

  const edition = useEdition()
  const categoryNominations = edition.nominations[categoryId]

  React.useEffect(() => {
    if (ballots.bets?.[categoryId]) setBets(ballots.bets?.[categoryId])
    if (ballots.wishes?.[categoryId]) setWishes(ballots.wishes?.[categoryId])
  }, [ballots.bets, ballots.wishes, categoryId])

  React.useEffect(() => {
    return navigation.addListener('beforeRemove', async () => {
      await ballots.vote(categoryId, bets, wishes)
    })
  }, [ballots, bets, categoryId, navigation, upToDate, wishes])

  const renderCard = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    const isWish = wishes?.includes(item.id)
    const isFirstBet = bets?.first === item.id
    const isSecondBet = bets?.second === item.id

    const place = (type: 'bet' | 'wish'): void => {
      if (type === 'wish')
        if (isWish) {
          setWishes((value) => {
            return value?.filter((wish) => {
              return wish !== item.id
            })
          })
        } else {
          setWishes((value = []) => {
            return [...value, item.id]
          })
        }
      else if (type === 'bet') {
        if ((bets?.first && bets?.second) || (!bets?.first && !bets?.second)) {
          setBets({
            first: item.id,
            second: undefined,
          })
        }
        if (bets?.first && isFirstBet && !bets?.second) {
          setBets({
            first: undefined,
            second: undefined,
          })
        }
        if (bets?.first && !isFirstBet && !bets?.second) {
          setBets((value) => {
            return {
              ...value,
              second: item.id,
            }
          })
        }
      }
    }

    if (item.person)
      return (
        <Card.Person
          place={place}
          isFirstBet={isFirstBet}
          isSecondBet={isSecondBet}
          isWish={isWish}
          actorId={item.person}
          character={item.character}
          winner={edition.winners?.[item.category] === item.id}
          movieId={item.movie}
          onLongPress={(): void => {
            user?.admin && setNewWinner([edition.people[item.person].name, item.id])
          }}
          onPress={(): void => {
            navigation.navigate(routes.movie, { movieId: item.movie })
          }}
        />
      )
    if (item.song)
      return (
        <Card.Song
          place={place}
          isFirstBet={isFirstBet}
          isSecondBet={isSecondBet}
          isWish={isWish}
          song={item.song}
          information={item.information}
          winner={edition.winners?.[item.category] === item.id}
          movieId={item.movie}
          onLongPress={(): void => {
            user?.admin && setNewWinner([item.song, item.id])
          }}
          onPress={(): void => {
            navigation.navigate(routes.movie, { movieId: item.movie })
          }}
        />
      )
    return (
      <Card.Movie
        place={place}
        isFirstBet={isFirstBet}
        isSecondBet={isSecondBet}
        isWish={isWish}
        information={item.information}
        winner={edition.winners?.[item.category] === item.id}
        movieId={item.movie}
        onLongPress={(): void => {
          user?.admin && setNewWinner([edition.movies[item.movie].name['en-US'], item.id])
        }}
        onPress={(): void => {
          navigation.navigate(routes.movie, { movieId: item.movie })
        }}
      />
    )
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          size="action"
          variant="secondary"
        />
        <Header.Title numberOfLines={1}>{categories_map[categoryId].name['en-US']}</Header.Title>
        <Header.Placeholder />
      </Header.Root>

      <FlatList
        style={styles.content}
        indicatorStyle="black"
        data={categoryNominations}
        renderItem={renderCard}
        ItemSeparatorComponent={Global.Separator}
        ListHeaderComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
      />

      <WinnerModal
        categoryId={categoryId}
        newWinner={newWinner}
        setNewWinner={setNewWinner}
      />
    </Global.Screen>
  )
}

export default Category
