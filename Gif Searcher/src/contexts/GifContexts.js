import React, { useState } from "react";

const Context = React.createContext({})

export function GifsContextProvider({children}){
    const [list, setGifs]= useState([])
    return <Context.Provider value = {{list,setGifs}}>
                {children}
           </Context.Provider>
}

export default Context;

