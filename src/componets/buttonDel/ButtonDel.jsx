import './ButtonDel.css';

export function ButtonDel({handler}){

    return (
        <button className='btn__del' onClick={handler}>X</button>
    )
}