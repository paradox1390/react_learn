export const Button = ({onClick}) => {
  return (
    <button 
    className="bg-slate-300 hover:bg-slate-600 hover:text-slate-50 px-4 py-2" 
    onClick={()=>{onClick()}}>
        Log In
    </button>
  )
}
