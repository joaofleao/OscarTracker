import { createContext } from 'react'

import { type DataContextType } from '../types'

const DataContext = createContext<DataContextType>({} as DataContextType)
DataContext.displayName = 'DataContext'

export default DataContext
