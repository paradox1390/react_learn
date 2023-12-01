import parse from 'html-react-parser'

export const Table = ({row, col, onClick}) => {
    let table ='';
    for(let i = 1; i <= row; i++){
        table += '<tr>';
        for(let k = 1; k <= col; k++){
            table += `<td className='border border-slate-300 p-3'>row: #${i} cell :#${k}</td>`
        }
        table +='</tr>'
    }

  return (
    <table className='border-collapse: collapse;' onClick={onClick}>
        <tbody>
            {parse(table)}
        </tbody>
    </table>
  )
}
