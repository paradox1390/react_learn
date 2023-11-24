import { useState } from "react";
import { Button } from "../../componets/button"
import { Avatar } from "../../componets/avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useIdUserContext } from "../../hooks/useIdUserContext";
import { auth } from "../../services/getData"

export const Header = () => {
    const [data, setData] = useState(null)
    const {isAuth, setIsAuth} = useAuthContext();
    const {setId} = useIdUserContext();

    const authorisation = async()=>{
        const data = await auth()
        setId(data.id)
        setData(data)
        setIsAuth(true)
    }

  return (
    <header className="max-w-5xl flex justify-between items-center mx-auto px-10 py-3.5 h-24">
        <div className="text-2xl font-extrabold">LOGO</div>
        {!isAuth && <Button onClick={authorisation}/>}
        {isAuth && <Avatar img={data.image} name={data.username}/>}
    </header>
  )
}
