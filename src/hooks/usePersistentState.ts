import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { print } from '@utils/functions'

const usePersistedState = <T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => {
    const loadState = async (): Promise<void> => {
      try {
        const storedState = await AsyncStorage.getItem(key)
        if (storedState !== null) {
          setState(JSON.parse(storedState))
        }
      } catch (error) {
        print('Failed to load state from AsyncStorage', error, 'red')
      }
    }

    loadState()
  }, [key])

  useEffect(() => {
    const saveState = async (): Promise<void> => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(state))
      } catch (error) {
        print('Failed to save state to AsyncStorage', error, 'red')
      }
    }

    saveState()
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
