import { ReactNode, createContext, useContext } from "react";

export interface ButtonContextProps {
  loading?: boolean,
}

export const ButtonContext = createContext({} as ButtonContextProps);

export interface ButtonProviderProps extends ButtonContextProps {
  children: ReactNode,
}

export function ButtonProvider({ children, ...context }: ButtonProviderProps) {
  
  return (
    <ButtonContext.Provider value={context}>
      {children}
    </ButtonContext.Provider>
  );
}

export const useButtonContext = () => useContext(ButtonContext);