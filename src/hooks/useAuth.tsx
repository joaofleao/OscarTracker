import { useContext } from "react"
import { AuthContext, type AuthContextType } from "../contexts"

const useAuth = (): AuthContextType | null => {
  return useContext(AuthContext)
}

export default useAuth
