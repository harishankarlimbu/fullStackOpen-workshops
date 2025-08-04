// App.jsx
import { useState } from 'react'
import Task from './Task'
function App() {
  const [newTask,setNewTask]=useState('')
  const [tasks,setTasks] = useState([
    { id: 1, title: "Walk the dog" },
    { id: 2, title: "Read a book" },
    { id: 3, title: "Water the plants" }
  ])

  function handleAdd(){
    const obj={id:tasks.length+1, title:newTask}
    setTasks([...tasks,obj]);
    // setNewTask('')
  }

  return (
    <>
    <ul>
      {tasks.map((tit) => (
        <li key={tit.id}>
          <Task task={tit} />
        </li>
      ))}
    </ul>
    <div> 
      <input type='text' value={newTask} onChange={(e)=> setNewTask(e.target.value)}
       > </input>
      <button onClick={handleAdd} > Add</button>
    </div>
      </>
  )
}

export default App
