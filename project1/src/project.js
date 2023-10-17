import React, { useState } from 'react';

const Tasklist = () => {
 const [tasks, setTasks] = useState([]);
 const addTask = (task) => {
  setTasks([...tasks, task]);
 };

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
setInputValue(e.target.value);
};

const handleSubmit = (e) => {
e.preventDefault();
if (inputValue.trim()) {
  addTask(inputValue.trim());
  setInputValue('');
}
};
return (
  <div>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         value={inputValue}
         onChange={handleInputChange}
       />
       <button type="submit">Add Task</button>
     </form>
     <ul>
       {tasks.map((task, index) => (
         <li key={index}>{task}</li>
       ))}
     </ul>
  </div>
 );
};

export  default Tasklist;
