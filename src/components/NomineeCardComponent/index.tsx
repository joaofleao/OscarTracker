import React, { Text, TouchableOpacity, type TouchableOpacityProps, View } from 'react-native'
import { styled } from 'nativewind'

import { usePersonalData, useUser } from '../../hooks'
import { getImage } from '../../services/tmdb/api'
import { PosterComponent } from '..'

interface ButtonProps extends TouchableOpacityProps {
  image: string
  title: string
  information?: string
  extra?: string
  id: string
}

const NomineeCardComponent = ({ image, title, id, information, extra, ...props }: ButtonProps): JSX.Element => {
  const { preferences } = useUser()
  const { isWatched } = usePersonalData()

  return (
    <TouchableOpacity
      delayPressIn={200}
      className="justify-center "
      {...props}
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
