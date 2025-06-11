import React from 'react'

function ToDoItem({ indexid, taskname,status,todolist,setTodolist }) {
  
  const handleupdate = (e) => {
    const updated = todolist.map(val =>
      val.name == taskname ? { ...val, status: e.target.value }:val
    );
    setTodolist(updated);
  }

  const handledelete = () => {
    const remaining = todolist.filter(val=>val.name!==taskname)
    setTodolist(remaining);
    console.log(todolist)
  }
  

  
  return (
    <div>
      <div id="itemcontainer">
        <div style={{textAlign:"initial",margin:"10px",fontWeight:"bold"}}>ID :{indexid }</div>
        <div style={{margin:"10px",fontWeight:"bold"}}>Task :{taskname}</div>
        <div id="status">
          <div>Status : </div>
          <div>

          <select value={status} onChange={handleupdate }>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          </div>
          
        </div>
        <button type="button" onClick={handledelete} style={{padding:"7px 7px 7px 7px",borderRadius:"8px"}}>Delete</button>
      </div>
    </div>
  )
}

export default ToDoItem