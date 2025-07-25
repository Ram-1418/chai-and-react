import { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]); // Add new task to the list
      setTask(''); // Clear the input
    }
  


  };

    const cancel=(id)=>{
      console.log(id)

      const temp = tasks.filter((_item, idx)=>idx!=id)

      setTasks(temp)
      console.log('temp', ...temp)
    }



  return (
    <div style={{ padding: '20px' }}>
      <h2>To-Do List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
   

      <ul>
        {tasks.map((t, index) => (
          <li  key={index}>{t}   <button onClick={()=>cancel(index)}>delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
