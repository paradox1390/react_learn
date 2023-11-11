import { useState } from 'react';
import { useEffect } from 'react';
import { NameToDo } from '../nameToDo';
import { DescToDo } from '../descToDo';
import { saveToStorage } from '../../storage/storage';
import './Header.css';

export function Header ({storage, handlerStorage}){
const[nameInp, setNameInp] = useState('');
const[descInp, setDescInp] = useState('');
const[disabled, setDisabled] = useState(true);
const [clearInpName, setClearInpName] = useState(false)
const [clearInpDesc, setClearInpDesc] = useState(false)

const saveTodo = ()=>{
    const id = storage.length;
    const toDo = {
        name: nameInp,
        description : descInp,
        id: id
    }
    const newStorage = [...storage]
    newStorage.push(toDo)
    saveToStorage(newStorage);
    handlerStorage(newStorage);
    setClearInpName(true);
    setClearInpDesc(true);
}

useEffect(()=>{
    if(nameInp&&descInp){
        setDisabled(false)
    }else{
        setDisabled(true)
    }
},[nameInp, descInp])

    return<header className='header'>
    <NameToDo handler={setNameInp} clear={clearInpName} handlerClear={setClearInpName}/>
    <DescToDo handler={setDescInp} clear={clearInpDesc} handlerClear={setClearInpDesc}/>
    <button className='button__add' disabled={disabled} onClick={()=>{saveTodo()}}>Add</button>
    </header>
}