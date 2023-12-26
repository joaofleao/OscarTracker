import React from 'react'
import { ListRenderItemInfo } from 'react-native'

import Card from './Card'
import * as Styled from './styles'
import SubmitModal from './SubmitModal'
import WinnerModal from './WinnerModal'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useBallots } from '@features/ballots'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import useModal from '@hooks/useModal'
import { type CategoryProps, Nomination } from '@types'
import routes from '@utils/routes'

const Category = ({ navigation, route }: CategoryProps): JSX.Element => {
  const { categoryId } = route.params
  const { adminSettings } = useUser()
  const { categories } = useCategories()

  const ballots = useBallots()

  const [wishes, setWishes] = React.useState(undefined)
  const [bets, setBets] = React.useState(undefined)

  const [newWinner, setNewWinner] = React.useState<[string, string] | null>(null)

  const [submitModal, setSubmitModalOpen, setSubmitModalClose] = useModal(false)

  const upToDate = !(bets !== ballots.bets?.[categoryId] || wishes !== ballots.wishes?.[categoryId])

  const edition = useEdition()
  const categoryNominations = edition.nominations[categoryId]

  const handleSubmit = (): void => {
    ballots.vote(categoryId, bets, wishes)
  }

  React.useEffect(() => {
    if (ballots.bets?.[categoryId]) setBets(ballots.bets?.[categoryId])
    if (ballots.wishes?.[categoryId]) setWishes(ballots.wishes?.[categoryId])
  }, [ballots.bets, ballots.wishes, categoryId])

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
          character={item.information}
          winner={edition.winners[item.category] === item.id}
          movieId={item.movie}
          onPress={(): void => {
            adminSettings
              ? setNewWinner([edition.people[item.person].name, item.id])
              : navigation.navigate(routes.logged.movie, { movieId: item.movie })
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
          winner={edition.winners[item.category] === item.id}
          movieId={item.movie}
          onPress={(): void => {
            adminSettings
              ? setNewWinner([item.song, item.id])
              : navigation.navigate(routes.logged.movie, { movieId: item.movie })
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
        winner={edition.winners[item.category] === item.id}
        movieId={item.movie}
        onPress={(): void => {
          adminSettings
            ? setNewWinner([edition.movies[item.movie]['en-US'].name, item.id])
            : navigation.navigate(routes.logged.movie, { movieId: item.movie })
        }}
      />
    )
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.Row>
          <Button
            onPress={upToDate ? navigation.goBack : setSubmitModalOpen}
            icon={<Icon.ArrowLeft />}
            size="action"
            variant="secondary"
          />
          <Header.Title numberOfLines={1}>{categories[categoryId]['en-US']}</Header.Title>
        </Header.Row>

        <Button
          label={upToDate ? 'up to date' : 'submit'}
          disabled={upToDate}
          onPress={handleSubmit}
          size="action"
          variant="secondary"
        />
      </Header.Root>

      <Styled.Content
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

      <SubmitModal
        visible={submitModal}
        close={setSubmitModalClose}
        category={categories[categoryId]['en-US']}
        handleSubmit={handleSubmit}
      />
    </Global.Screen>
  )
}

export default Category
