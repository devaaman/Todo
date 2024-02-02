// TodoApp.jsx
import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import TodoList from './TodoList';
import Header from "./Header"
import CompletedTodoList from './CompletedTodoList';
import axios from 'axios';
import { URL } from './config';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {

    const v = JSON.parse(localStorage.getItem("user"));
    
   

    if (v) {
      setUser(v);
    }
    console.log("user222", user);
  }, []);

  useEffect(() => {
    const v = JSON.parse(localStorage.getItem("user"));
    const u = v._id;
    console.log("11user", u);

    if (v) {
      setUser(v);
    }
  }, []); // Remove the dependency array to make it run once on mount

  useEffect(() => {
    console.log("user222", user); // This will log the updated state
  }, [user]); // Add user as a dependency


  useEffect(() => {
    fetchTodos();
    console.log(todos);
  }, [user]);

  const fetchTodos = async () => {

    console.log("446846321", user)
    try {
      if (user) {
        console.log("hiiiiii")
        const userId = user?._id;
        const response = await axios.get(URL + "/getTodos/" + userId);
        // const res=JSON.parse(response)

        console.log("got response");
        console.log(response?.data);
        const fetchedTodos = response?.data || [];

        const incompleteTodos = fetchedTodos.filter(todo => !todo.isCompleted);
        const completedTodos = fetchedTodos.filter(todo => todo.isCompleted);
        setTodos(incompleteTodos);
        setCompletedTodos(completedTodos);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleDelete = async (todoId) => {
    try {
      await axios.delete(`${URL}/deleteTodo/${todoId}`);
      // Update the state after successful deletion
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleComplete = async (todoId) => {
    try {
      await axios.put(`${URL}/updateTodo/${todoId}`);
      // Update the state after successful completion
      fetchTodos();
    } catch (error) {
      console.error('Error completing todo:', error);
    }
  };
  const handleCreateTodo = async () => {
    try {
      if (newTodo.trim() !== "") {
        const userId = user?._id;
        const response = await axios.post(URL + "/createTodo", { userId, desc: newTodo });
        console.log(response.data);
        // Clear the input field after successful creation
        setNewTodo("");
        // Update the state after successful creation
        fetchTodos();
      }
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };


  return (
    <div>
      <Header></Header>
      <div className='todo-item-container'>
          <input
            className='enter-todo'
            type="text"
            maxLength="200"
            placeholder="Enter Todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="contained" onClick={handleCreateTodo}>
            Create Todo
          </Button>
        </div>
      
      <div className="centerds">      <h2>Pending Todos</h2>
      </div>
      <TodoList todos={todos} onDelete={handleDelete} onComplete={handleComplete} />
      <div className="centerds">      <h2>Completed Todos</h2>
      </div>      <CompletedTodoList completedTodos={completedTodos} onDelete={handleDelete} />
    </div>
  );
};

export default TodoApp;
