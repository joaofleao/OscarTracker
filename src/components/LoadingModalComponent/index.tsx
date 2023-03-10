import React, { useEffect, useState } from 'react'
import { Text, View, Modal } from 'react-native'
import { LoadingComponent } from '..'

import { useTheme } from '../../hooks'

function LoadingScreen() {
  const { loadingText, isLoading } = useTheme()

  return (
    <Modal
      visible={isLoading}
      transparent={true}
      animationType='fade'>
      <View className='items-center justify-center flex-1 bg-zinc-900'>
        <LoadingComponent
          animation='movie'
          size={100}
        />
        <Text className='text-white font-primaryBold text-lg mt-4'>{loadingText}</Text>
      </View>
    </Modal>
  )
}

export default LoadingScreen
