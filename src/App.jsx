import { useState } from 'react';
import { TodoList } from './sections/todoList/';
import { Header } from './sections/header/Header'
import './App.css'

function App() {
  const[storage, setStorage] = useState([]);

  return (
    <>
    <Header storage={storage} handlerStorage={setStorage}/>
    <div className='todo-list__container'>
    <TodoList storage={storage}  handlerStorage={setStorage}/>
    </div>
    </>
  )
}

export default App
