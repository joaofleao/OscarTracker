import { createContext } from 'react'

import { BetsType, WishesType } from './types'

export interface BallotsContextType {
  vote: (categoryId: string, bets: BetsType, wishes: WishesType) => void
  bets: BetsType
  wishes: WishesType
}

const BallotsContext = createContext<BallotsContextType | null>(null)
BallotsContext.displayName = 'BallotsContext'

export default BallotsContext
