import { createContext } from 'react'

import type { CategoryType } from '@types'

export interface CategoriesContextType {
  categories: Record<string, CategoryType>
  getCategories: () => Promise<void>
}

const CategoriesContext = createContext<CategoriesContextType | null>(null)
CategoriesContext.displayName = 'CategoriesContext'

export default CategoriesContext
