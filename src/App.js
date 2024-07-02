import React from 'react';
import './App.css';
import { useState } from 'react';
import InputTask from './TodoList/InputTask';
import ItemTask from './TodoList/ItemTask';
function App() {
  const[toDoList,setToDoList]=useState([]);
  const addTask=(taskName)=>{
    const newTask={taskName,checked:false};
    setToDoList([...toDoList,newTask]);
  };
  function deleteTask(deleteTaskName){
    setToDoList(toDoList.filter((task)=>task.taskName!==deleteTaskName));
  }
  function toggleCheck(taskName){
    setToDoList((prevToDoList)=>prevToDoList.map
    (task=>task.taskName===taskName?{...task,
      checked:!task.checked}:task)
  )
  }
  console.log(toDoList);
  return (
    <div className="App">
      <h1 className='heading'>
        Task Master
      </h1> 
      <InputTask  addTask={addTask}/>
      <div className='toDoList'>
        <span>To Do</span>
        <ul className='list-items'>
          {toDoList.map((task,key)=>(
            <ItemTask  task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
          ))}

        </ul>
        {toDoList.length===0?(
          <p className='notify'>Your are done</p>):null}
           
      </div>
      <stats toDoList={toDoList}/>    

    </div>
    
  
  );
}

export default App;

