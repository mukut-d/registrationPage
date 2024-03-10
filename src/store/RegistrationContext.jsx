import { createContext } from "react";

export const Context = createContext({

});

export default function RegistrationContext({children}){
    const ctxValue = {

    }
    return (
        <>
        <Context.Provider value={ctxValue}>
            {children}
        </Context.Provider>
        </>
    )
}