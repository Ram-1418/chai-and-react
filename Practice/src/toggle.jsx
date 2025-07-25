import React from 'react'
import { useState } from 'react';
const Toggle = () => {
  const[text,setText]=useState('hello')

  const handleChange=(e)=>{
    setText(e.target.value)
  }

  return (
    <div >
     <input type="text" 
       value={text}
       onChange={handleChange}
       placeholder='Enter a Number'
     />
     <p>your text{text}</p>
     <button onClick={()=>setText('jayesh')}>Reset</button>
    </div>
  )
}

export default Toggle
