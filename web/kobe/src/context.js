import { createContext } from "react";

export const NewContext = createContext({ name: "Kobe" });

export const NewContextProvider = ({ children }) => {
  return (
    <NewContext.Provider value={{ name: "Bryant" }}>
      {children}
    </NewContext.Provider>
  );
};
