
import {createContext, PropsWithChildren, useState} from "react";

type ContextType = {

}
const Context = createContext<ContextType | undefined>(undefined)
const ThemeProvider = ({children}: PropsWithChildren<{}>) => {
    const show = useState(true);
    return (
       <Context.Provider value={show}>
           {children}
       </Context.Provider>
    );
};

export {
    ThemeProvider,
    Context
}