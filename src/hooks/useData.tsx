import { useContext } from 'react'
import { DataContext } from '../contexts'

const useData = () => {
  return useContext(DataContext)
}

export default useData
