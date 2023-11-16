import { useEffect, useState } from 'react'
import { getTime } from '../../utils';
export const Time = () => {
    const[time, setTime] = useState(getTime());

    useEffect(()=>{
        const timeID = setTimeout(()=>{setTime(getTime())},1000)
        return ()=>{clearTimeout(timeID)}
    },[time])

  return (
    <div className='p-2.5 bg-slate-800 text-gray-50 self-center'>{time}</div>
  )
}
