import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, type ImageSourcePropType, type ListRenderItemInfo, Platform, Text, TouchableOpacity, View } from 'react-native'

import { david, IMDB, jason, justin, poster } from '../../../assets/images'
import { Button, Header, Model, ProgressBarComponent } from '../../../components'
import { useUser } from '../../../features'
import { type PreferencesScreenProps } from '../../../types'
import { routes } from '../../../utils'

const PreferencesScreen = ({ navigation }: PreferencesScreenProps): JSX.Element => {
  const scrollViewRef = useRef<FlatList>(null)
  const user = useUser()

  const [ratingsSpoiler, setRatingsSpoiler] = useState(true)
  const [castSpoiler, setCastSpoiler] = useState(true)
  const [plotSpoiler, setPlotSpoiler] = useState(true)
  const [posterSpoiler, setPosterSpoiler] = useState(true)

  const [preferences, setPreferences] = useState({
    poster: true,
    plot: true,
    cast: true,
    ratings: true,
  })

  const [index, setIndex] = useState(0)
  const { width } = Dimensions.get('window')

  const handleNext = (show: boolean): void => {
    if (index === 1) setPreferences({ ...preferences, poster: show })
    if (index === 2) setPreferences({ ...preferences, plot: show })
    if (index === 3) setPreferences({ ...preferences, cast: show })
    if (index === 4) setPreferences({ ...preferences, ratings: show })
    handleForward()
  }
  const handleForward = (): void => {
    if (index < 5) setIndex((index) => index + 1)
    else {
      navigation.navigate(routes.logged.home)
      user.updateUser(undefined, undefined, undefined, preferences, true)
    }
  }
  const handleBack = (): void => {
    if (index > 0) setIndex((index) => index - 1)
  }

  useEffect(() => {
    scrollViewRef.current?.scrollToIndex({
      index,
      animated: true,
    })
  }, [index])

  const castData = [
    { name: 'Justin Long', character: 'Alvin', image: justin },
    { name: 'Jason Lee', character: 'Dave', image: jason },
    { name: 'David Cross', character: 'Ian', image: david },
  ]

  const getCast = (item: { name: string; image: ImageSourcePropType; character: string }): JSX.Element => (
    <View className="h-36">
      <View className="bg-zinc-800/40 rounded-xl items-center justify-center">
        <Image
          source={item.image}
          style={{ opacity: castSpoiler ? 0 : 1 }}
          className="h-full rounded-xl aspect-[0.7]"
        />
        <Text
          style={{ opacity: castSpoiler ? 1 : 0 }}
          className="absolute font-primaryBold text-base text-white text-center"
        >
          Click to Show
        </Text>
      </View>

      <View className="py-3">
        <View className="bg-zinc-800/40 rounded-xl">
          <Text
            style={{ opacity: castSpoiler ? 0 : 1 }}
            numberOfLines={2}
            className="text-white font-primaryBold text-base bg-zinc-900"
          >
            {item.name}
          </Text>

          <Text
            style={{ opacity: castSpoiler ? 0 : 1 }}
            numberOfLines={2}
            className="text-white font-primaryRegular text-sm bg-zinc-900"
          >
            {item.character}
          </Text>
        </View>
      </View>
    </View>
  )

  const screens = [
    {
      key: 0,
      secondButton: 'Lets go!',
      title: 'Spoiler Settings',
      content: (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full text-center">Welcome!</Text>
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full text-center">Time to choose your spoiler preferences</Text>
          <Text className="text-white font-primaryRegular text-lg mb-12 w-full text-center ">You can change your preferences at any time in the settings.</Text>
        </View>
      ),
    },
    {
      key: 1,
      firstButton: 'Of course!',
      secondButton: 'Heh? No',
      title: 'Poster',
      content: (
        <View className="items-center flex-1">
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full">Do you consider a movie's poster a spoiler?</Text>
          <Text className="text-white font-primaryRegular text-base w-full">If you do, the poster will look like this until you watch the movie or click on it.</Text>

          <TouchableOpacity
            className="bg-zinc-800/40 rounded-xl items-center justify-center flex-1 w-fit my-10"
            onPress={() => {
              setPosterSpoiler((value) => !value)
            }}
          >
            <Image
              source={poster}
              style={{ opacity: posterSpoiler ? 0 : 1 }}
              className="h-full rounded-xl aspect-[0.7]"
            />
            <Text
              className="text-white font-primaryRegular text-base text-justify absolute"
              style={{ opacity: posterSpoiler ? 1 : 0 }}
            >
              Click to reveal
            </Text>
          </TouchableOpacity>
        </View>
      ),
    },
    {
      key: 2,
      firstButton: 'Yep',
      secondButton: 'Nope',
      title: 'Plot',
      content: (
        <View className="flex-1">
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full">How about a movie's plot?</Text>
          <Text className="text-white font-primaryRegular text-base mb-4  w-full">If you do, the plot will be hidden like this until you watch the movie or click on it.</Text>
          <View className="flex-1 justify-center">
            <TouchableOpacity
              onPress={() => {
                setPlotSpoiler((value) => !value)
              }}
            >
              <Text
                style={{ opacity: plotSpoiler ? 0 : 1 }}
                className="text-white font-primaryRegular text-base text-justify"
              >
                When an alien with amazing powers crash-lands near Mossy Bottom Farm, Shaun the Sheep goes on a mission to shepherd the intergalactic visitor home before a sinister organization can capture her.
              </Text>
              {plotSpoiler && (
                <View className="absolute bg-zinc-800/40 w-full h-full items-center justify-center rounded-xl">
                  <Text className="text-white font-primaryRegular text-base text-justify">Click to reveal</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      ),
    },
    {
      key: 3,
      firstButton: 'Yeah',
      secondButton: 'Nah',
      title: 'Casting',
      content: (
        <View className="flex-1">
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full">Ok, this one is weird, but we have to ask... Is the casting of the movie a spoiler?</Text>
          <Text className="text-white font-primaryRegular text-base mb-4 w-full">If you do, the cast will remain hidden until you watch the movie or click on it.</Text>

          <View className=" flex-1 ">
            <TouchableOpacity
              className="flex-row flex-1 justify-between"
              onPress={() => {
                setCastSpoiler((value) => !value)
              }}
            >
              {getCast(castData[0])}
              {getCast(castData[1])}
              {getCast(castData[2])}
            </TouchableOpacity>
          </View>
        </View>
      ),
    },
    {
      key: 4,
      firstButton: 'Definitely',
      secondButton: 'Not for me',
      title: 'Ratings',

      content: (
        <View className="flex-1">
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full">Last one!</Text>
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full">And the movie ratings, IMDB and Rotten Tomatoes, are those spoilers?</Text>
          <Text className="text-white font-primaryRegular text-base mb-4 w-full">If you think so, the score will not show until you've seen the movie or clicked on it.</Text>

          <View className="flex-1 justify-center">
            <TouchableOpacity
              className=" items-center flex-row justify-center"
              onPress={() => {
                setRatingsSpoiler((value) => !value)
              }}
            >
              <View className="p-4 bg-zinc-800/40 justify-center items-center rounded-xl">
                <IMDB
                  width={48}
                  height={48}
                />

                <Text className="text-white font-primaryBold text-lg mt-3">{ratingsSpoiler ? 'Show' : '8.0'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ),
    },
    {
      key: 5,
      secondButton: 'Nice!',
      title: 'Spoiler Settings',
      content: (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white font-primaryBold text-2xl mb-4 w-full text-center">All Set!</Text>
          <Text className="text-white font-primaryRegular text-lg mb-4 w-full text-center ">Your spoilers will stay hidden until you watch the movie or click on the spoiler</Text>
        </View>
      ),
    },
  ]

  const renderItem = ({ item }: ListRenderItemInfo<{ firstButton: string; secondButton: string; content: any }>): JSX.Element => (
    <View
      style={{ width }}
      className="px-4"
    >
      {item.content}
    </View>
  )

  return (
    <Model>
      <Header
        leadingButton={index !== 0 ? 'arrow-left' : ''}
        leadingAction={handleBack}
        title="Preferences"
        description={screens[index].title}
      />
      <ProgressBarComponent
        className=" mb-10"
        total={5}
        progress={index}
      />
      <FlatList
        ref={scrollViewRef}
        data={screens as any}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={renderItem}
      />
      <View className={`items-center justify-end ${Platform.OS === 'android' ? 'mb-6' : ''}`}>
        {screens[index].firstButton != null && (
          <Button
            label={screens[index].firstButton}
            className="w-60 mb-4"
            onPress={() => {
              handleNext(false)
            }}
          />
        )}
        {screens[index].secondButton != null && (
          <Button
            label={screens[index].secondButton}
            className="w-60"
            onPress={() => {
              handleNext(true)
            }}
          />
        )}
      </View>
    </Model>
  )
}

export default PreferencesScreen
