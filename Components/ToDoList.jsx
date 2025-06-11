import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({todolist,setTodolist}) {
    
  return (
      <div id="viewcontainer">
          <div id="listcontainer">
              
              <div id="lists">
                  {
                      todolist.map((item, i) =>
                          <div>
                              
                            <ToDoItem indexid={i} taskname={item.name} status={item.status} todolist={todolist} setTodolist={setTodolist} />
                          </div>
                       
                      )
                      
                  }
              </div>
          </div>
      </div>
      
  )
}

export default ToDoList