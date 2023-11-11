import { useEffect } from 'react'
import { TodoItem } from '../../componets/todoItem'
import { restoreFromStorage } from '../../storage/storage'
import './TodoList.css'

export function TodoList ({storage, handlerStorage}){
    useEffect(()=>{
        const newStorage = restoreFromStorage();
        if(newStorage){
            handlerStorage(newStorage)
        }
    },[])
    return(
    <>
        {storage.length===0?<span className='nothing'>Yes, all done, nothing to do yoohoooo!!!</span>: storage.map(({name, description, id})=>{
            return <div className='item__container' key={id}> 
                <TodoItem name={name} description={description} id={id} storage={storage} handlerStorage={handlerStorage} />
            </div>
        })}
    </>)
}