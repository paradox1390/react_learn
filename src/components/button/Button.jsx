import { memo } from "react";

export const Button = ({onClick}) => {
  return (
    <button className="box-content w-28 p-2 bg-slate-200 hover:bg-slate-300 border-2" type="submit" onClick={onClick}>Button</button>
  )
}

export const ButtonMemo = memo(Button);