import React, { Text, TouchableOpacity, View } from 'react-native'
import { styled } from 'nativewind'

import { usePersonalData, useUser } from '../../hooks'
import { getImage } from '../../services/tmdb/api'
import { PosterComponent } from '..'

interface ButtonProps {
  image: string
  title: string
  information?: string
  extra?: string
  id: string
  onPress: () => void
}

const NomineeCardComponent = ({ image, title, id, information, extra, onPress, ...rest }: ButtonProps): JSX.Element => {
  const { preferences } = useUser()
  const { isWatched } = usePersonalData()

  return (
    <TouchableOpacity
      delayPressIn={200}
      onPress={onPress}
      className="justify-center "
      {...rest}
    >
      <View className="flex-row ">
        <PosterComponent
          image={getImage(image)}
          isWatched={isWatched(id)}
          spoiler={preferences.poster}
        />
        <View className="flex-1">
          <Text
            numberOfLines={3}
            className={`ml-4 text-lg font-primaryBold text-white`}
          >
            {title}
          </Text>
          {information != null && (
            <Text
              numberOfLines={2}
              className={`ml-4 text-base font-primaryRegular text-zinc-600`}
            >
              {information}
            </Text>
          )}
          {extra != null && (
            <Text
              numberOfLines={2}
              className={`ml-4 text-base font-primaryRegular text-amber-500`}
            >
              {extra}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default styled(NomineeCardComponent)
