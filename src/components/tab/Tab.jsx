import { useEffect,useRef  } from "react";
import { useTabsContext } from "../../hooks/useTabsContext"


export const Tab = ({children}) => {
    const tabRef = useRef();
    const{addTabs, changeActiveTabs} = useTabsContext();

    useEffect(()=>{
        addTabs(tabRef);
    },[addTabs])
  return (
    <button ref={tabRef} 
            onClick={()=>{changeActiveTabs(tabRef)}} 
            className="bg-slate-300 hover:bg-slate-500 px-4 py-2">
        {children}
    </button>
  )
}
