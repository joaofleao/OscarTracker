import { useContext } from 'react'

import DataContext, { type DataContextType } from './DataContext'

const useData = (): DataContextType => {
  const useDataContext = useContext(DataContext)

  if (useDataContext === null) {
    throw new Error('useData has to be used within <DataContext.Provider>')
  }
  return useDataContext
}

export default useData
