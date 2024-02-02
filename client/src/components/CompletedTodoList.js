// CompletedTodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import CompletedTodo from './CompletedTodo';
const CompletedTodoList = ({ completedTodos, onDelete }) => {
  return (
    <div>
      {completedTodos.map((todo) => (
        // <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />
        <CompletedTodo key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CompletedTodoList;
