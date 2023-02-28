import { Provider } from '../types'
import { MoviesContext } from '../contexts'
import { MoviesContextType } from '../types/ContextTypes'

const MoviesProvider: React.FC<Provider> = ({ children }) => {
  const value = {} satisfies MoviesContextType

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesProvider
