import { useEffect, useState } from 'react'
import { Linking, type ListRenderItemInfo, ScrollView, TouchableOpacity, View } from 'react-native'

import * as Styled from './styles'
import { IMDB } from '@assets/images'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import Spoiler from '@components/Spoiler'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useMovies } from '@features/movies'
import { useTheme } from '@features/theme'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'
import type {
  MovieProps,
  MovieType,
  Nomination,
  ProductionCompany,
  TMDBPerson,
  WatchProvider,
} from '@types'
import routes from '@utils/routes'

const Movie = ({ navigation, route }: MovieProps): JSX.Element => {
  const { movieId } = route.params
  const edition = useEdition()
  const user = useUser()
  const movies = useMovies()
  const { categories } = useCategories()
  const theme = useTheme()

  const { image, name } = edition.movies[movieId]['en-US']

  const [watched, setWatched] = useState<boolean>(false)
  const [movieData, setMovieData] = useState<MovieType>()
  const [movieCast, setMovieCast] = useState([])
  const [movieProviders, setMovieProviders] = useState([])
  const [nominations, setNominations] = useState<Nomination[]>([])

  const imdbLink = `https://www.imdb.com/title/${movieId}`

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const nominationsData = await edition.getMovieNominations(movieId)
      setNominations(nominationsData)
      const movie = await movies.getMovie(movieId)
      const cast = await movies.getCast(movieId)
      const providers = await movies.getProviders(movieId)

      setMovieProviders(() => {
        return providers.results?.BR?.flatrate?.filter((provider: WatchProvider) => {
          return provider.provider_id !== 1796
        })
      })
      setMovieData(movie)
      setMovieCast(cast.cast.slice(0, 10))
    }
    fetchData()
  }, [edition, movieId, movies])

  useEffect(() => {
    const value = user.movies.includes(movieId) || false
    setWatched(value)
  }, [movieId, user.movies])

  const markAsWatched = (current: boolean): void => {
    if (current) {
      user.setMovieUnwatched(movieId)
    } else {
      user.setMovieWatched(movieId)
    }
  }

  const renderCast = ({ item }: ListRenderItemInfo<TMDBPerson>): JSX.Element => {
    const picture = getImage(item.profile_path)

    return (
      <Styled.CastSpoiler
        show={user.preferences.cast}
        watched={watched}
        text="Click to show cast member"
      >
        <Styled.Cast
          onPress={(): void => {
            Linking.openURL(`https://www.themoviedb.org/person/${item.id}`)
          }}
        >
          <Styled.CastImageContainer>
            {picture && <Styled.CastNoImage>No Image</Styled.CastNoImage>}
            <Styled.CastImage source={{ uri: picture }} />
          </Styled.CastImageContainer>

          <Styled.CastName numberOfLines={2}>{item.name}</Styled.CastName>
          <Styled.CastCharacter numberOfLines={2}>{item.character}</Styled.CastCharacter>
        </Styled.Cast>
      </Styled.CastSpoiler>
    )
  }

  const renderItem = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    const winner = item.id === edition.winners?.[item.category]

    return (
      <Styled.Nomination
        onPress={(): void => {
          navigation.navigate(routes.logged.category, { categoryId: item.category })
        }}
      >
        {winner && (
          <Icon.Oscar
            filled
            width={18}
            height={18}
          />
        )}
        <Styled.NominationText>{categories[item.category]['en-US']}</Styled.NominationText>
      </Styled.Nomination>
    )
  }

  const renderProvider = ({ item }: ListRenderItemInfo<ProductionCompany>): JSX.Element => {
    return <Styled.Provider source={{ uri: getImage(item.logo_path) }} />
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.Row>
          <Button
            onPress={navigation.goBack}
            icon={<Icon.ArrowLeft />}
            size="action"
            variant="secondary"
          />
        </Header.Row>
        <Button
          onPress={(): void => {
            markAsWatched(watched)
          }}
          label={`mark as ${watched ? 'unwatched' : 'watched'}`}
          size="action"
          variant={watched ? 'secondary' : 'primary'}
        />
      </Header.Root>

      <ScrollView>
        <Styled.Title>{name}</Styled.Title>
        <Styled.ContentContainer>
          <Styled.MainContent>
            <Styled.SpoilerPoster
              show={user.preferences.poster}
              watched={watched}
              text="Show Poster"
            >
              <Styled.Poster source={{ uri: getImage(image, 1280) }} />
            </Styled.SpoilerPoster>

            <Styled.BasicData>
              <Styled.IconInformation>
                <Icon.Clock
                  width={18}
                  height={18}
                  color={theme.colors.primary.default}
                />
                <Styled.IconInformationText>{movieData?.runtime}</Styled.IconInformationText>
              </Styled.IconInformation>

              <Spoiler
                text="Show"
                show={user.preferences.ratings}
                watched={watched}
              >
                <Styled.IconInformation>
                  <Icon.Star
                    width={18}
                    height={18}
                    color={theme.colors.primary.default}
                  />
                  <Styled.IconInformationText>
                    {movieData?.vote_average != null &&
                      Math.round(movieData?.vote_average * 10) / 10}
                  </Styled.IconInformationText>
                </Styled.IconInformation>
              </Spoiler>

              <Styled.IconInformation>
                <Icon.Globe
                  width={18}
                  height={18}
                  color={theme.colors.primary.default}
                />
                <Styled.IconInformationText>
                  {movieData?.original_language}
                </Styled.IconInformationText>
              </Styled.IconInformation>

              <TouchableOpacity
                onPress={(): void => {
                  Linking.openURL(imdbLink)
                }}
              >
                <IMDB
                  width={32}
                  height={32}
                />
              </TouchableOpacity>
            </Styled.BasicData>
          </Styled.MainContent>

          <View>
            <Styled.CarousselHeader>
              <Styled.SubTitle>Nominations</Styled.SubTitle>
            </Styled.CarousselHeader>

            <Styled.List
              horizontal
              showsHorizontalScrollIndicator={false}
              data={nominations}
              renderItem={renderItem}
              ItemSeparatorComponent={Global.Separator}
              ListHeaderComponent={Global.Separator}
              ListFooterComponent={Global.Separator}
            />
          </View>

          <View>
            <Styled.CarousselHeader>
              <Styled.SubTitle>Where to Watch</Styled.SubTitle>
            </Styled.CarousselHeader>

            {movieProviders?.length > 0 ? (
              <Styled.List
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movieProviders}
                renderItem={renderProvider}
                ItemSeparatorComponent={Global.Separator}
                ListHeaderComponent={Global.Separator}
                ListFooterComponent={Global.Separator}
              />
            ) : (
              <Styled.EmptyState>No streaming services available</Styled.EmptyState>
            )}
          </View>

          <View>
            <Styled.CarousselHeader>
              <Styled.SubTitle>Plot</Styled.SubTitle>
            </Styled.CarousselHeader>
            {movieCast.length < 1 ? (
              <Styled.EmptyState>Plot not available</Styled.EmptyState>
            ) : (
              <Spoiler
                show={user.preferences.plot}
                watched={watched}
              >
                <Styled.Plot>{movieData?.overview}</Styled.Plot>
              </Spoiler>
            )}
          </View>

          <View>
            <Styled.CarousselHeader>
              <Styled.SubTitle>Cast</Styled.SubTitle>
            </Styled.CarousselHeader>

            {movieCast.length < 1 ? (
              <Styled.EmptyState>Cast not available</Styled.EmptyState>
            ) : (
              <Styled.List
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movieCast}
                renderItem={renderCast}
                ItemSeparatorComponent={Global.Separator}
                ListHeaderComponent={Global.Separator}
                ListFooterComponent={Global.Separator}
              />
            )}
          </View>
        </Styled.ContentContainer>
      </ScrollView>
    </Global.Screen>
  )
}

export default Movie
