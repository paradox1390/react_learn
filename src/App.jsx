import { useState } from "react"
import { Table } from "./components/table"
import { Tabs } from "./components/tabs"
import { TabsProvider } from "./provider/tabsProvider"

function App() {
const[cell, setCell] = useState('')
const onClick = (e)=>{
  if(e.target.nodeName === 'TD'){
    setCell(e.target.innerText)
  }
}
  return (
    <>
      <div className="max-w-5xl mx-auto my-10">
        <TabsProvider>
        <Tabs defaultOption={2}/>
        </TabsProvider>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <Table row={4} col={4} onClick={onClick}/>
        {cell&&<div className="mt-8">{cell}</div>}
      </div>
    </>
  )
}

export default App
