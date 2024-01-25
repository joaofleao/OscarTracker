import AsyncStorage from '@react-native-async-storage/async-storage'

import { printFetch } from '@utils/functions'

interface useAsyncStorageType {
  storeString: (id: string, value: string) => Promise<void>
  storeObject: (id: string, value: unknown) => Promise<void>
  readString: (id: string) => Promise<string>
  readObject: (id: string) => Promise<unknown>
  remove: (id: string) => Promise<void>
}

const useAsyncStorage = (): useAsyncStorageType => {
  const storeObject: useAsyncStorageType['storeObject'] = async (id, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(id, jsonValue)
    } catch (e) {
      printFetch('async-storage', `error saving object: ${id}`, 'red')
    }
  }

  const storeString: useAsyncStorageType['storeString'] = async (id, value) => {
    try {
      await AsyncStorage.setItem(id, value)
    } catch (e) {
      printFetch('async-storage', `error saving string: ${id}`, 'red')
    }
  }

  const readString: useAsyncStorageType['readString'] = async (id) => {
    try {
      const value = await AsyncStorage.getItem(id)
      if (value !== null) {
        return value
      }
    } catch (e) {
      printFetch('async-storage', `error reading string: ${id}`, 'red')
    }
  }

  const readObject: useAsyncStorageType['readObject'] = async (id) => {
    try {
      const jsonValue = await AsyncStorage.getItem(id)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      printFetch('async-storage', `error reading string: ${id}`, 'red')
    }
  }

  const remove: useAsyncStorageType['remove'] = async (id) => {
    try {
      await AsyncStorage.removeItem(id)
    } catch (e) {
      printFetch('async-storage', `error removing: ${id}`, 'red')
    }
  }

  return {
    storeObject,
    storeString,
    readString,
    readObject,
    remove,
  }
}

export default useAsyncStorage
