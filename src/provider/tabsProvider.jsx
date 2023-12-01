import { useState } from "react";
import { createContext } from "react";

export const TabsContext = createContext();

const tabs = [];
const addTabs = (ref)=>{
    tabs.push(ref)
}

export const TabsProvider = ({children})=>{
    const [activeTabs, setActiveTabs] = useState(null)

    const changeActiveTabs = (ref)=>{
        const index = tabs.findIndex((el)=> el === ref)
        setActiveTabs(index);
    }

    return <TabsContext.Provider value={{addTabs, changeActiveTabs, activeTabs, setActiveTabs}}>
        {children}
    </TabsContext.Provider>
}