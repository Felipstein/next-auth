import { ReactNode, createContext, useContext } from "react";

export interface FieldInputContextProps {
  field: string,
}

export const FieldInputContext = createContext<FieldInputContextProps>({} as FieldInputContextProps);

export interface FieldInputProviderProps extends FieldInputContextProps {
  children: ReactNode,
}

export function FieldInputProvider({ children, ...context }: FieldInputProviderProps) {
  
  return (
    <FieldInputContext.Provider value={context}>
      {children}
    </FieldInputContext.Provider>
  );
}

export const useFieldInput = () => useContext(FieldInputContext);