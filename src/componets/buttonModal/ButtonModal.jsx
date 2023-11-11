import './ButtonModal.css';

export function ButtonModal ({handler, vis}){
    

    return <>

    <button className='btn' onClick={()=>{handler(!vis)}}>{vis?'Hide':'Show'}</button>
    </>
}