import React from "react";
import { useState } from "react";
const InputTask=({addTask})=>{
    const[task,setTask]=useState('');
    /*console.log('task');*/
    function handleInputVlaue(event){
        setTask(event.target.value);
    }
    function handleAddTask(event){
        event.preventDefault();
        if(task.trim()==='') return;
        addTask(task);
        setTask('');
    }
    /*console.log('toDoList');*/
    return(
        
        <form className="inputField" onSubmit={handleAddTask}>
            <input type="text" 
            placeholder="Add item" 
            value={task} 
            onChange={handleInputVlaue}/>
            <button className="button">+</button>
        </form>
    
    );
};
export default InputTask;