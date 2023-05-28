import { createContext, useState } from "react"
import { UserContext } from "../utils/types"

export const AuthUserContext = createContext<UserContext>({
  setUser(arg) {},
  user: null,
})
export const AuthUserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null)

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  )
}
