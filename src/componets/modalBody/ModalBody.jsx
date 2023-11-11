import './ModalBody.css'

export function ModalBody ({vis, description}){
    let classList ='';
    vis? classList='modal': classList='modal hide';
    
    return <>
    <div className={classList}>
        <p>{description}</p>
    </div>
    </>
}