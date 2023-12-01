import { useTabsContext } from "../../hooks/useTabsContext"

export const TabContent = ({value,children}) => {
const{activeTabs} = useTabsContext();

const vis = activeTabs == value? 'block':'hidden';
  return (
    <div className={`min-h-150 ${vis}`}>{children}</div>
  )
}
