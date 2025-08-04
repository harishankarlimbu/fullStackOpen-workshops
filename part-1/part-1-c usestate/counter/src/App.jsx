
import { useState } from "react";
import Button from "./Button";
function App() {
  // let count=0;
  let [count, setCount] = useState(1);
  // function counter() {
  //   setCount( =>count + 1);
    // let currentVal=document.getElementById('btn');
    // currentVal.innerText=`count is ${count}`;

  return (
    <>
      <Button callFunc={()=> setCount(count=>count+1)} label="Increment"/>
      <Button callFunc={()=> setCount(count=>count-1)} label="Decrement"/>
      <Button callFunc={()=> setCount(0)} label="Reset"/>
      <p id='btn'> the count is rn {count}</p>
    </>
  )
}
export default App
