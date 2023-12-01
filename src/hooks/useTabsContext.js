import { useContext } from "react";
import { TabsContext } from "../provider/tabsProvider";

export const useTabsContext = () => {
  return useContext(TabsContext);
};
