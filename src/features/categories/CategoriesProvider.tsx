import React from 'react'
import { collection, getDocs } from 'firebase/firestore'

import CategoriesContext, { type CategoriesContextType } from './CategoriesContext'
import useAsyncStorage from '@hooks/useAsyncStorage'
import { db } from '@services/firebase'
import { CategoryType } from '@types'
import { printFetch } from '@utils/functions'

const CategoriesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const categoriesCollection = collection(db, 'categories')

  const async = useAsyncStorage()

  const [categories, setCategories] = React.useState<CategoriesContextType['categories']>({})

  const getCategories: CategoriesContextType['getCategories'] = async () => {
    const storedCategories = await async.readObject('categories')

    if (storedCategories) {
      printFetch('Async-Storage', 'Categories fetched', 'blue')
      setCategories(storedCategories as CategoriesContextType['categories'])
    } else {
      printFetch('Firebase', 'Categories fetched', 'yellow')

      const response = await getDocs(categoriesCollection)
      const map: CategoriesContextType['categories'] = {}

      response.forEach((item) => {
        map[item.id] = item.data() as CategoryType
      })

      const ordered = Object.entries(map)
        .sort((a, b) => {
          const order = a[1].order - b[1].order
          return order
        })
        .reduce((accumulator: CategoriesContextType['categories'], current) => {
          accumulator[current[0]] = current[1]
          return accumulator
        }, {})

      setCategories(ordered)
      await async.storeObject('categories', ordered)
    }
  }

  const value: CategoriesContextType = {
    categories,
    getCategories,
  }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

export default CategoriesProvider
