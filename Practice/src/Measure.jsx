import React, { useEffect, useRef, useState } from 'react'

export const Measure = () => {

    const[width,setWidth]=useState(0)
    const boxref=useRef(null)

    useEffect(()=>{
        if (boxref.current) {
            setWidth(boxref.current.offsetWidth)
            
        }
    },[])
  return (
    <>
    <div ref={boxref} style={{ width: '300px', height: '100px', background: 'lightblue' }}>

 Measure Box
    </div >
    <p>Box width {width}px</p>
    </>
  )
}
