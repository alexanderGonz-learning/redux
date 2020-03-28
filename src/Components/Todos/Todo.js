import React from 'react'

const Todo = ({ todo, updateTodo, deleteTodo}) => (
  <li>
    <input 
      type='checkbox' 
      id={`check_${todo.id}`}
      checked={todo.checked} 
      onChange={() => {
        updateTodo(todo)
      }}
    />
    <button onClick={() => {
      deleteTodo(todo)
    }}>
      x
    </button>
    <label htmlFor={`check_${todo.id}`} >{ todo.text } </label>
  </li>
)

export default Todo