import React, { useState } from 'react'

function Header({ todolist, setTodolist }) {
    let arr = [];
    const [tododetails, setTododetails] = useState({
        name: "",
        status:"Not Completed"
    })
    const [color, setColor] = useState('black');
    const [statusmessage, setStatusmessage] = useState('');
    

    const handleadd = async() => {
        if (tododetails.name)
        {
            console.log(tododetails.status)
            setColor('black');
            setTodolist([...todolist, tododetails]);
            setStatusmessage('Sucess..');
            setTododetails({ name: "" });
            setTimeout(() => {
                setStatusmessage("");
            },3000)
        }
        else {
            setColor('red');
            setStatusmessage('Please Enter The Todo...');
        }
    }
  return (
      <div>
          <h3 style={{textAlign:"center",fontSize:"1.5rem",marginBottom:"20px"}}>ToDo Application</h3>
          <div id="Addingcontainer">
                  <div>
                    <input type='text' placeholder='Enter the Todo' value={tododetails.name} onChange={(e) => { setTododetails({...tododetails,name:e.target.value }) }} />
                    <div style={{color:`${color}`}}>{ statusmessage}</div> 
                  </div>
                  <div>
                  <button type="button" onClick={handleadd}>Add Todo</button>
              </div>
              
          </div>
          <h3 style={{margin:"20px"}}>Your TODO'S</h3>
    </div>
  )
}

export default Header