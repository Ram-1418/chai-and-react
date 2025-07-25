import React from 'react'
import { useState } from 'react'
const[check,setCheck]=useState('true')

const change=(e)=>{
  setCheck(e.target.value)
}

{
  return (
    <div>
      <label>
        <input 
        onChange={change}
        checked={check}
        type="checkbox" />
        I like this
      </label>

      <p>you:{check ?"liked":'unliked'}</p>
    </div>
  )
}

export default check
