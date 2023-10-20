import React from 'react'
import { ListRenderItemInfo } from 'react-native'

import Card from './Card'
import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import Modal from '@components/Modal'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { type CategoryProps, Nomination } from '@types'
import routes from '@utils/routes'

const Category = ({ navigation, route }: CategoryProps): JSX.Element => {
  const { categoryId } = route.params
  const { adminSettings } = useUser()
  const { categories } = useCategories()

  const [newWinner, setNewWinner] = React.useState<[string, string] | null>(null)

  const edition = useEdition()
  const categoryNominations = edition.nominations[categoryId]

  const renderModal = (
    <Modal.Root
      visible={!!newWinner}
      onClickOutside={(): void => {
        setNewWinner(null)
      }}
    >
      <Modal.Title>Winner</Modal.Title>
      <Modal.Description>
        Are you sure you want to set
        <Styled.Accent> {newWinner?.[0]} </Styled.Accent>
        as the winner?
      </Modal.Description>

      <Modal.Row>
        <Button
          width="full"
          label="Cancel"
          variant="secondary"
          onPress={(): void => {
            setNewWinner(null)
          }}
        />
        <Button
          width="full"
          variant="primary"
          label="Set Winner"
          onPress={(): void => {
            edition.markCategoryWinner(newWinner[1], categoryId)
            setNewWinner(null)
          }}
        />
      </Modal.Row>
    </Modal.Root>
  )

  const renderCard = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    if (item.person)
      return (
        <Card.Person
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
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          size="action"
          variant="secondary"
        />
        <Header.Title>
          {adminSettings && 'Winner of '}
          {categories[categoryId]['en-US']}
        </Header.Title>
      </Header.Root>

      <Styled.Content
        indicatorStyle="black"
        data={categoryNominations}
        renderItem={renderCard}
        ItemSeparatorComponent={Global.Separator}
      />

      {renderModal}
    </Global.Screen>
  )
}

export default Category
