import { useState } from "react"
import { useRef } from "react"
import { Button } from "./components/Button/Button"
import { ColorPicker } from "./components/ColorPicker"

function App() {
  const [color, setColor] = useState(null)
  const refColor = useRef(null)

  const showColor = ()=>{
    setColor(refColor.current)
  }



  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-14">
      <ColorPicker refColor = {refColor}/>
      <Button onClick={showColor}/>

      {color&&<div className="flex gap-4 items-center">
                <span>{color}</span>
                <div style={{width:'50px', height:'50px', backgroundColor:`${color}`}}>
                </div>
              </div>}
    </div>
  )
}

export default App
