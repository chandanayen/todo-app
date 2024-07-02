import React from "react"
const stats=({toDoList})=>{
    let countList=toDoList.length;
    return(
        <div className="stats">
            <p className="notify">{countList===0?'you got everything!Ready to go':'You have ${countList} item on your list'}</p>
        </div>
    )
}