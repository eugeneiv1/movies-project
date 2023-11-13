
import {createContext, PropsWithChildren, useState} from "react";

type ContextType = {

}
const Context = createContext<ContextType | undefined>(undefined)
const ContextProvider = ({children}: PropsWithChildren<{}>) => {
    const movie = useState(null);
    return (
       <Context.Provider value={movie}>
           {children}
       </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
}