import { memo } from "react";

export const Input = ({defaultVal,onChange}) => {
  return (
    <input type="text" className=" mt-3.5 border-2" onChange={(e)=>{onChange(e.target.value)}} value={defaultVal}/>
  )
}

export const InputMemo = memo(Input);