import Button from '@mui/material/Button';
import React from 'react';
const CompletedTodo = ({ todo, onDelete }) => {
    if (todo.desc === null || todo.desc === undefined) {
      return <div className='centerds'>No Completed Todos</div>; 
    }
  
    return (
      <div className="todo-item-container">
        <div className="todo-description">{todo.desc}</div>
        <div className="todo-actions">
         
          <Button variant="contained" className="danger" onClick={() => onDelete(todo._id)}>
            Delete
          </Button>
        </div>
      </div>
    );
  };
  
  
  export default CompletedTodo;
  