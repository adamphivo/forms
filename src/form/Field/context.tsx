import { createContext, PropsWithChildren } from "react";

interface FieldContextProps {
  name: string;
}

export const FieldContext = createContext<FieldContextProps>({ name: "" });

const ContextProvider = (props: PropsWithChildren<FieldContextProps>) => {
  return (
    <FieldContext.Provider value={props}>
      {props.children}
    </FieldContext.Provider>
  );
};

export default ContextProvider;
