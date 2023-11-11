import { useState, useEffect } from 'react'
import './NameToDo.css'

export function NameToDo ({handler, clear, handlerClear}){
    const [value, setValue] = useState('')

    const handlerValue = (e)=>{
        setValue(e.target.value)
        handler(value)
    }

    useEffect(()=>{
        if(clear){
            setValue('');
            handler('');
            handlerClear(false)
        }
    },[clear, handlerClear, value, handler])
    return  (
        <div className='inp__container inp__name'>
        <span>Name:</span>
        <input className='input' type="text" value={value} onChange={(e)=>{handlerValue(e)} }/>
        </div>
    )
}