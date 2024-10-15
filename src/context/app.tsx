import { createContext, useState } from "react";

interface AppContextType {
  user: null | string;
  setUser: React.Dispatch<React.SetStateAction<null | string>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({children}: {children: React.ReactElement}) => {
  const [user, setUser] = useState<string | null>(null);
  return <AppContext.Provider value={{user, setUser}}>
    {children}
  </AppContext.Provider>
}

export default AppProvider;