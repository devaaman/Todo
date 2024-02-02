// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onComplete }) => {
  // Sample todos
  const sampleTodos = [
   
    
    { _id: 3, title: 'Write code', completed: false },
  ];

  // Use the provided todos or fallback to the sampleTodos if no todos are passed
  const todosToRender = todos.length > 0 ? todos : sampleTodos;

  return (
    <div>
      {todosToRender.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </div>
  );
};

export default TodoList;
