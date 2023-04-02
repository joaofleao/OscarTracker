import React from 'react'
import { Image, View } from 'react-native'

import { IconComponent } from '../../components'
interface PosterProps {
  image: string
  isWatched: boolean
  spoiler: boolean
  large?: boolean
}

const PosterComponent = ({ image, isWatched, spoiler, large = false }: PosterProps): JSX.Element => {
  const width = large ? 158 : 106
  const height = large ? 236 : 158

  const getPoster = (
    <Image
      source={{ uri: image }}
      className="absolute w-full h-full rounded-xl"
      resizeMode="cover"
    />
  )
  const getCover = (
    <View
      style={{ width, height }}
      className="absolute rounded-xl bg-zinc-900/80 items-center justify-center"
    />
  )
  const getIcon = (
    <View className="absolute rounded-xl bg-amber-500 p-2 justify-center items-center">
      <IconComponent
        name="eye-off"
        className="color-zinc-900"
        size={18}
      />
    </View>
  )

  return (
    <View
      style={{ width, height }}
      className="items-center justify-center bg-zinc-700/20 rounded-xl relative"
    >
      {(isWatched || spoiler) && getPoster}
      {!isWatched && spoiler && getCover}
      {!isWatched && getIcon}
    </View>
  )
}

export default PosterComponent
