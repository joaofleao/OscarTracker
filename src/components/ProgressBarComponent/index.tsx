import { TouchableOpacity, Text, View } from 'react-native'
import { IconComponent } from '..'
import { styled } from 'nativewind'

import colors from 'tailwindcss/colors'

interface ProgressBarProps {
  total?: number
  progress?: number
}

function ProgressBarComponent({ total, progress, ...rest }: ProgressBarProps) {
  return (
    <View className='flex-row justify-between mx-5 mb-5 items-center'>
      <View>
        <Text className='text-stone-700 mr-3'>{progress}</Text>
      </View>
      <View className='bg-zinc-800 h-2 flex-1 rounded-3xl'>
        <View
          className='bg-amber-500 flex-1 rounded-3xl'
          style={{ width: (13 / 53) * 100 + '%' }}
        />
      </View>
      <Text className='text-stone-700 ml-4'>{total}</Text>
    </View>
  )
}

export default styled(ProgressBarComponent)
