import React from 'react'
import { Text } from 'react-native'

import NominationCaroussel from './NominationCaroussel'
import * as Styled from './styles'
import Global from '@components/Global'
import Header from '@components/Header'
import ProgressBar from '@components/ProgressBar'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import type { HomeScreenProps } from '@types'
import routes from '@utils/routes'

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  const edition = useEdition()
  const user = useUser()

  React.useEffect(() => {
    if (!user.onboarding) navigation.navigate(routes.logged.preferences)
  }, [user.onboarding, navigation])

  const data = Object.entries(edition.categories)

  const renderNominationCaroussel = (item): JSX.Element => {
    return NominationCaroussel(item, navigation, edition, user)
  }

  return (
    <Global.Screen hideBottom>
      <Header.Root>
        <Header.TextContainer>
          <Text>
            <Header.LogoAccent bigHeader>oscar</Header.LogoAccent>
            <Header.Logo bigHeader>tracker</Header.Logo>
          </Text>
          <Header.Description bigHeader>here are the 2022 nominations</Header.Description>
        </Header.TextContainer>
      </Header.Root>
      <Styled.Content>
        <ProgressBar
          progress={user.watchedMovies.length}
          total={edition.totalMovies}
        />

        <Styled.List
          data={data}
          renderItem={renderNominationCaroussel}
          ItemSeparatorComponent={Global.Separator}
        />
      </Styled.Content>
    </Global.Screen>
  )
}

export default HomeScreen
