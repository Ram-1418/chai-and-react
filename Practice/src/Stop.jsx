import React, { useState } from 'react'
import { useRef } from 'react'

const Stop = () => {
    const[seconds,setSeconds]=useState(0)
    const intervalRef=useRef(null)


    const start=()=>{
        if (!intervalRef.current) {
            intervalRef.current=setInterval(()=>{
                setSeconds((seconds)=>seconds+1)
            },1000)
        }

    }
    const stop=()=>{
clearInterval(intervalRef.current)
   intervalRef.current=null
    }

    const reset=()=>{
        setSeconds(0)
    }
  return (
    <div>

        <h2>{seconds}</h2>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
         <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stop