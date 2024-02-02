// TodoItem.jsx
import React from 'react';
import Button from '@mui/material/Button';

// const TodoItem = ({ todo, onDelete, onComplete }) => {
//   return (
//     <div className="todo-item-container">
//       <div className="todo-description">{todo.desc}</div>
//       <div className="todo-actions">
//         <Button variant="contained" className="primary" onClick={() => onComplete(todo._id)}>
//           Mark as Complete
//         </Button>
//         <Button variant="contained" className="danger" onClick={() => onDelete(todo._id)}>
//           Delete
//         </Button>
//       </div>
//     </div>
//   );
// };

const TodoItem = ({ todo, onDelete, onComplete }) => {
  if (todo.desc === null || todo.desc === undefined) {
    return <div className='centerds'>No Pending Todos</div>; 
  }

  return (
    <div className="todo-item-container">
      <div className="todo-description">{todo.desc}</div>
      <div className="todo-actions">
        <Button variant="contained" className="primary" onClick={() => onComplete(todo._id)}>
          Mark as Complete
        </Button>
        <Button variant="contained" className="danger" onClick={() => onDelete(todo._id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};


export default TodoItem;
