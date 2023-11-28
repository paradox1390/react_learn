export const ColorPicker = ({refColor}) => {
  const change = (e)=>{
    refColor.current = e.target.value
  }

  return (
    <>
    <input type="color" onChange={change}/>
    </>
  )
}
