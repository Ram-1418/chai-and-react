import React, { useState, useCallback } from 'react';

// const Button = React.memo(({ handleClick }) => {
//   console.log('Button rendered');
//   return <button onClick={handleClick}>Click Me</button>;
// });

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log('Clicked!');
//   }, []); // ✅ Memoized

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Button handleClick={handleClick} />
//     </div>
//   );
// };

// const Child = React.memo(({ onClick }) => {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   // Not using useCallback
//   const handleClick = () => {
//     console.log("Clicked!");
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child onClick={handleClick} />
//     </>
//   );
// };


// export default Counter

const Parent=()=>{
  const[count,setCount]=useState(0)

  const handleClick=useCallback(()=>{
    console.log('Clicked')
  },[count])
  return(
    <>
    <button onClick={()=>setCount(count=>count+1)}>Increament</button>
    <p>{count}</p>
    <Child onClick={handleClick}/>
    </>
  )
}

const Child = React.memo(({onClick})=>{
console.log('chlidrean was renderes');
return <button onClick={onclick}>Click me</button>

})
export default Parent