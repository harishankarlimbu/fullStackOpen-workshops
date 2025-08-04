import { useState } from 'react'
import History from './History';
function App() {
  let [counter, setCouter] = useState({ left: 0, right: 0 });
  let [counterArray, setCounterArray] = useState([]);
  function leftCounter() {
    setCouter({ ...counter, left: counter.left + 1 });
    setCounterArray([...counterArray, 'L'])
  }
  function rightCounter() {
    setCouter({ ...counter, right: counter.right + 1 });
    setCounterArray([...counterArray, 'R'])
  }
  return (
    <>
      <button onClick={leftCounter} >Left </button>
      <button onClick={rightCounter} >Right </button>
      <p> left count : {counter.left}</p>
      <p> right count : {counter.right} </p>
      <History history={counterArray}></History>
    </>
  )
}

export default App
