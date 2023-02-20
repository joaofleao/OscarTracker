import { Text, View } from 'react-native'
import { styled } from 'nativewind'

interface ProgressBarProps {
  total: number
  progress: number
}

function ProgressBarComponent({ total, progress, ...rest }: ProgressBarProps) {
  return (
    <View className='flex-row justify-between mx-5 items-center'>
      <View>
        <Text className='text-zinc-600 mr-3 font-primaryRegular '>{progress}</Text>
      </View>
      <View className='bg-zinc-800 h-2 flex-1 rounded-3xl'>
        <View
          className='bg-amber-500 flex-1 rounded-3xl'
          style={{ width: (progress / total) * 100 + '%' }}
        />
      </View>
      <Text className='text-zinc-600 ml-4 font-primaryRegular '>{total}</Text>
    </View>
  )
}

export default styled(ProgressBarComponent)
