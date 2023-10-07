import React from 'react'
import { collection, getDocs } from 'firebase/firestore'

import CategoriesContext, { type CategoriesContextType } from './CategoriesContext'
import { db } from '@services/firebase'
import { CategoryType } from '@types'
import { printFetch } from '@utils/functions'

const CategoriesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const categoriesCollection = collection(db, 'categories')

  const [categories, setCategories] = React.useState<CategoriesContextType['categories']>({})

  const getCategories = async (): Promise<void> => {
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
  }
  const value: CategoriesContextType = {
    categories,
    getCategories,
  }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

export default CategoriesProvider
