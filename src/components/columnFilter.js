import React from 'react'

export const columnFilter = ({column}) => {
    const{filterValue,SetFilter}=column
  return (
    <span>
        Search:{" "}
        <input value={filterValue||''}onChange={(e)=>
        SetFilter(e.target.value)}/>
    </span>
   
  )
}

export default columnFilter