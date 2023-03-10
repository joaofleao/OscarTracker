import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { IconComponent } from '../../components'

type ToastNotificationProps = React.ComponentProps<typeof View> & {
  title: string
  description: string
  type: string
  position: Animated.Value
}

function ToastNotificationComponent(props: ToastNotificationProps) {
  return (
    <Animated.View
      style={{ transform: [{ translateY: props.position }] }}
      className={`mx-5 p-4 rounded-xl flex-row items-center justify-between z-20 absolute ${
        props.type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }
      }`}>
      <View className='flex-row items-center flex-1 '>
        <IconComponent
          name={props.type === 'success' ? 'check-circle' : 'alert-circle'}
          className='text-white pr-4'
          size={30}
        />

        <View className='flex-1'>
          <Text
            numberOfLines={2}
            className='text-white text-base font-primaryBold'>
            {props.title}
          </Text>
          {props.description && (
            <Text
              numberOfLines={2}
              className='text-white/80 text-sm font-primaryRegular'>
              {props.description}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity>
        <IconComponent
          name='x'
          className='text-white pl-4'
          size={24}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}

export default ToastNotificationComponent
