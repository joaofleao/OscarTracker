import { useEffect, useState } from 'react'
import { Linking, type ListRenderItemInfo, ScrollView, View } from 'react-native'

import * as Styled from './styles'
import { IMDB } from '@assets/images'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import Spoiler from '@components/Spoiler'
import { useEdition } from '@features/edition'
import { useMovies } from '@features/movies'
import { useTheme } from '@features/theme'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'
import type {
  MovieScreenProps,
  MovieType,
  Nomination,
  ProductionCompany,
  TMDBPerson,
  WatchProvider,
} from '@types'
import routes from '@utils/routes'

const MovieScreen = ({ navigation, route }: MovieScreenProps): JSX.Element => {
  const { id, name, poster } = route.params
  const [watched, setWatched] = useState<boolean>(false)
  const [movieData, setMovieData] = useState<MovieType>()
  const [movieCast, setMovieCast] = useState([])
  const [movieProviders, setMovieProviders] = useState([])
  const [nominations, setNominations] = useState<Nomination[]>([])

  const edition = useEdition()
  const user = useUser()
  const movies = useMovies()
  const theme = useTheme()

  const imdbLink = `https://www.imdb.com/title/${id}`

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const nominationsData = await edition.getMovieNominations(id)
      setNominations(nominationsData)
      const movie = await movies.getMovie(id)
      const cast = await movies.getCast(id)
      const providers = await movies.getProviders(id)

      setMovieProviders(() => {
        return providers.results?.BR?.flatrate?.filter((provider: WatchProvider) => {
          return provider.provider_id !== 1796
        })
      })
      setMovieData(movie)
      setMovieCast(cast.cast.slice(0, 10))
    }
    fetchData()
  }, [edition, id, movies])

  useEffect(() => {
    const value = user.movies.includes(id) || false
    setWatched(value)
  }, [id, user.movies])

  const markAsWatched = (current: boolean): void => {
    if (current) {
      user.setMovieUnwatched(id)
    } else {
      user.setMovieWatched(id)
    }
  }

  const renderCast = ({ item }: ListRenderItemInfo<TMDBPerson>): JSX.Element => {
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
            <Styled.CastNoImage>No Image</Styled.CastNoImage>
            <Styled.CastImage source={{ uri: getImage(item.profile_path) }} />
          </Styled.CastImageContainer>

          <Styled.CastName numberOfLines={2}>{item.name}</Styled.CastName>
          <Styled.CastCharacter numberOfLines={2}>{item.character}</Styled.CastCharacter>
        </Styled.Cast>
      </Styled.CastSpoiler>
    )
  }

  const renderItem = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    return (
      <Styled.Nomination
        onPress={(): void => {
          navigation.navigate(routes.logged.nomination, { id: item.category })
        }}
      >
        <Styled.NominationText>{edition.categories[item.category]['en-US']}</Styled.NominationText>
      </Styled.Nomination>
    )
  }

  const renderProvider = ({ item }: ListRenderItemInfo<ProductionCompany>): JSX.Element => {
    return <Styled.Provider source={{ uri: getImage(item.logo_path) }} />
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          variant="action"
        />
        <Header.TextContainer>
          <Header.Title numberOfLines={2}>{name}</Header.Title>
        </Header.TextContainer>
      </Header.Root>

      <ScrollView>
        <Styled.ContentContainer>
          <Styled.MainContent>
            <Styled.SpoilerPoster
              show={user.preferences.poster}
              watched={watched}
              text="Show Poster"
            >
              <Styled.Poster source={{ uri: getImage(poster) }} />
            </Styled.SpoilerPoster>

            <Styled.BasicData>
              <Styled.Informations>
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
              </Styled.Informations>

              <Styled.WatchedButton
                watched={watched}
                onPress={(): void => {
                  markAsWatched(watched)
                }}
              >
                <Styled.WatchedText watched={watched}>
                  {watched ? 'Watched' : 'Unwatched'}
                </Styled.WatchedText>
              </Styled.WatchedButton>
            </Styled.BasicData>
          </Styled.MainContent>

          <View>
            <Styled.CarousselHeader>
              <Styled.Title>Nominations</Styled.Title>
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
              <Styled.Title>Where to Watch</Styled.Title>
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
              <Styled.NoProvider>No streaming services available</Styled.NoProvider>
            )}
          </View>

          <View>
            <Styled.CarousselHeader>
              <Styled.Title>Plot</Styled.Title>
            </Styled.CarousselHeader>
            <Spoiler
              show={user.preferences.plot}
              watched={watched}
            >
              <Styled.Plot>{movieData?.overview}</Styled.Plot>
            </Spoiler>
          </View>

          <View>
            <Styled.CarousselHeader>
              <Styled.Title>Cast</Styled.Title>
            </Styled.CarousselHeader>

            <Styled.List
              horizontal
              showsHorizontalScrollIndicator={false}
              data={movieCast}
              renderItem={renderCast}
              ItemSeparatorComponent={Global.Separator}
              ListHeaderComponent={Global.Separator}
              ListFooterComponent={Global.Separator}
            />
          </View>

          <Styled.IMDBButton
            onPress={(): void => {
              Linking.openURL(imdbLink)
            }}
          >
            <IMDB
              width={40}
              height={40}
            />
            <Styled.IMDBButtonText>Check on IMDB</Styled.IMDBButtonText>
          </Styled.IMDBButton>
        </Styled.ContentContainer>
      </ScrollView>
    </Global.Screen>
  )
}

export default MovieScreen
