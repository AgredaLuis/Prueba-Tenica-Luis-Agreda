import { ReactNode, useState } from "react"
import { GlobalContext } from "./global.context"

const EmptyGlobalState: string = "asd";

interface GlobalProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<string>(EmptyGlobalState)

  return (
    <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
  )
}