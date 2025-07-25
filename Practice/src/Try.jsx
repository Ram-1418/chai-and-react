import React, { useRef } from 'react';

const Try = () => {
//   const valueRef = useRef(0);        // ✅ Ref for the number value
//   const renderRef = useRef(null);    // ✅ Ref for DOM element (to display value)

//   const increment = () => {
//     valueRef.current += 1;
//     console.log('Current value is', valueRef.current);
//   };

//   const showValue = () => {
//     if (renderRef.current) {
//       renderRef.current.innerText = `Value is ${valueRef.current}`;
//     }
//   };

//   return (
//     <div>
//       <button onClick={increment}>Increment (Check Console)</button>
//       <button onClick={showValue}>Show Value</button>
//       <div ref={renderRef}></div> {/* ✅ Displays updated value */}
//     </div>
//   );
// };



  const inputref=useRef(null)


  const focusRef=()=>{
    inputref.current.focus()
  }
  return(
    <div>
      <input 
      ref={inputref}
      placeholder='enter a test'
      type="text" />
      <button onClick={focusRef}>focus</button>
      
    </div>
  )

}
export default Try;
