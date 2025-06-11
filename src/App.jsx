import React, { useState } from 'react'
import Header from '../Components/Header'
import ToDoList from '../Components/ToDoList'
import Example from '../Components/example';

function App() {
  const [todolist, setTodolist] = useState([]);
  
  return (
    <div>

    <div id="wholecontainer">
      <Header todolist={todolist} setTodolist={setTodolist} />
      <ToDoList todolist={todolist} setTodolist={setTodolist} />
    </div>
    </div>
  )
}

export default App