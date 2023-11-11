import { useState } from 'react';
import { ModalBody } from '../modalBody';
import { ButtonModal } from '../buttonModal';
import { ButtonDel } from '../buttonDel';
import { saveToStorage } from '../../storage/storage';
import './TodoItem.css';

export function TodoItem ({name, description, id, storage, handlerStorage}){
    const[visibility, setVisibility]=useState(false)
    const todoDel = ()=>{
        const newStorage = storage.filter((item)=>{ return item.id !== id})
        handlerStorage(newStorage);
        saveToStorage(newStorage);
    }
    return(
        <>
        <div className='item__header-container'>
            <h2 className='item__header'>{name}</h2>
            <div className='control__container'>

            <ButtonModal handler={setVisibility} vis={visibility}/> 
            <ButtonDel handler={todoDel}/>
            </div>
        </div>
        <ModalBody vis={visibility} description={description}/>
        </>
    )
}