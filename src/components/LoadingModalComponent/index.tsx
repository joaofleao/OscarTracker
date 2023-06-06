import React from 'react'
import { Modal, Text, View } from 'react-native'

import { useLoading } from '../../features'
import { LoadingComponent } from '..'

const LoadingScreen = (): JSX.Element => {
  const { loadingText, isLoading } = useLoading()

  return (
    <Modal
      visible={isLoading}
      transparent={true}
      animationType="fade"
    >
      <View className="items-center justify-center flex-1 bg-zinc-900">
        <LoadingComponent
          animation="movie"
          size={100}
        />
        <Text className="text-white font-primaryBold text-lg mt-4">{loadingText}</Text>
      </View>
    </Modal>
  )
}

export default LoadingScreen
