import { useEffect, useState } from "react";
import { Button } from "../../componets/button"
import { auth } from "../../services/getData"

// console.log(auth());

export const Header = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        const data = auth()
        setData(data)
    },[])

  return (
    <header className="flex justify-between px-10 py-3.5">
        <div className="text-2xl font-extrabold">LOGO</div>
        {data&& data.id}
        <Button/>
    </header>
  )
}
