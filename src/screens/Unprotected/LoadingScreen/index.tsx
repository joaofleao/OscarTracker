import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { LoadingComponent, ModelComponent } from '../../../components'

function LoadingScreen({ route, navigation }: any) {
  const { text, time, destination } = route.params

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(destination)
    }, time | 3000)
  }, [])

  return (
    <ModelComponent>
      <View className='items-center justify-center flex-1'>
        <LoadingComponent
          animation='movie'
          size={100}
        />
        <Text className='text-white font-[Montserrat-Bold] text-lg mt-4'>{text}</Text>
      </View>
    </ModelComponent>
  )
}

export default LoadingScreen
