import React, { useState } from 'react';

const Tasklist = () => {
 const [tasks, setTasks] = useState([]);
 const addTask = (task) => {
  setTasks([...tasks, task]);
 };

const [inputValue, setInputValue] = useState('');

const [editing, setEditing] = useState(false);

const handleInputChange = (e) => {
setInputValue(e.target.value);
};

const handleSubmit = (e) => {
e.preventDefault();
if (inputValue.trim()) {
  addTask(inputValue.trim());
  setInputValue('');
};};
const handleRemoveTask = (inputValue) => {
  const newTasks = [...tasks];
  newTasks.splice(inputValue, 1);
  setTasks(newTasks);
};
const handleEditTask = (e) => {
  e => setNewTask(e.target.value)}


const handleSave = (id, newTask) => {
 // Update the task in the state
 setTasks(prevTasks => {
    return prevTasks.map(task => {
      if (task.id === id) {
        return { ...task, title: newTask };
      }
      return task;
    });
 });

 // Stop editing the task
 setEditing(false);
};


return (
  <div className="Update">
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         value={inputValue}
         onChange={handleInputChange}
       />
       <button type="submit">Add Task</button>
       {/* <button type="button" onClick={() => handleRemoveTask(inputValue)}>remove Task</button> */}

     </form>
     <ul>
       {tasks.map((task, inputValue) => (
         <li key={inputValue}>{task}
         <button onClick={() => handleRemoveTask(inputValue)}>Remove</button>
         <button onClick={() => handleEditTask(inputValue)}>edit</button>
         <button onClick={() => handleSave(inputValue)}>save</button></li>

       ))}
     </ul>
    
  </div>
 );
};

export  default Tasklist;

