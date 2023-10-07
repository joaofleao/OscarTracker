import React from 'react'

import NominationCaroussel from './NominationCaroussel'
import * as Styled from './styles'
import Global from '@components/Global'
import Header from '@components/Header'
import ProgressBar from '@components/ProgressBar'
import { useAuth } from '@features/auth'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import type { HomeProps } from '@types'
import routes from '@utils/routes'

const Home = ({ navigation }: HomeProps): JSX.Element => {
  const edition = useEdition()

  const user = useUser()
  const auth = useAuth()
  const { categories } = useCategories()

  React.useEffect(() => {
    if (!auth.user.emailVerified) navigation.navigate(routes.logged.emailVerification)
  }, [auth.user.emailVerified, navigation])

  const renderNominationCaroussel = ({ item }): JSX.Element => {
    if (edition?.edition?.categories?.includes(item))
      return <NominationCaroussel categoryId={item} />
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.TextContainer>
          <Header.Logo bigHeader>
            <Header.LogoAccent>oscar</Header.LogoAccent>tracker
          </Header.Logo>

          <Header.Description bigHeader>here are the 2022 nominations</Header.Description>
        </Header.TextContainer>
      </Header.Root>
      <Styled.Content>
        <ProgressBar
          progress={user.movies.length}
          total={edition.totalMovies}
        />

        <Styled.List
          data={Object.keys(categories)}
          renderItem={renderNominationCaroussel}
          ItemSeparatorComponent={Global.Separator}
        />
      </Styled.Content>
    </Global.Screen>
  )
}

export default Home
