import { createContext } from "react"
import { type UserContextType } from "../types"

const UserContext = createContext<UserContextType>({} as UserContextType)
UserContext.displayName = "UserContext"

export default UserContext
