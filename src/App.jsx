import { useState, useCallback, useMemo } from "react"
import {ButtonMemo} from './components/button'
import {InputMemo} from './components/input'

function App() {
const [count, setCount] = useState(0)
const [value, setValue] = useState('default value')

const setCountMemo = useCallback(()=>{
   setCount((prev)=>{return prev + 1})
}, [])

const setValueMemo = useCallback((value)=>{
  setValue(value)
}, [])


const valueMemo = useMemo(()=>{
  return value
}, [value])

  return (
    <div className="flex flex-col content-center items-center justify-center min-h-screen">
      <ButtonMemo onClick={setCountMemo}/>
      <div className="mt-3.5">Count: {count} </div>
      <InputMemo defaultVal={valueMemo} onChange={setValueMemo}/>
      <div className="mt-3.5">Input result: {valueMemo} </div>
    </div>
  )
}

export default App
