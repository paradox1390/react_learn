import { useRef } from "react";
import { useTabsContext } from "../../hooks/useTabsContext";
import { Tab } from "../tab/Tab";
import { TabContent } from "../tabContent";

export const Tabs = ({defaultOption}) => {
   const{setActiveTabs}= useTabsContext()
   const firstRenderRef = useRef(true)

    if(typeof defaultOption !== 'undefined' && firstRenderRef.current){
        setActiveTabs(defaultOption)
    }else if(firstRenderRef.current){
        setActiveTabs(0)
    }
    firstRenderRef.current = false

    return (
        <>
            <div className="flex justify-center">
                <Tab>
                    Tab 1
                </Tab>
                <Tab>
                    Tab 2
                </Tab>
                <Tab>
                    Tab 3
                </Tab> 
            </div>
            <div>
                <TabContent value={0}>
                    <h3>Content for tab #1</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, quia.</p>
                </TabContent>
                <TabContent value={1}>
                    <h3>Content for tab #2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam 
                        vero dolorem est minima cum autem earum dolore nulla hic adipisci ratione, possimus inventore 
                        ugit dicta sapiente totam eius.</p>
                </TabContent>
                <TabContent value={2}>
                    <h3>Content for tab #3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae quidem deserunt.
                        Corporis, consequuntur perspiciatis?</p>
                </TabContent>
            </div>
        </>
    )
}
