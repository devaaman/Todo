
import './App.css';
import Header from  './components/Header'
// App.js
 import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage"; 
import LoginPage from "./components/LoginPage";
import TodoApp from "./components/TodoApp";

import CompletedTodoList from './components/CompletedTodoList';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/Add" element={<AddTodo />} /> */}
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/" element={<TodoApp />} />
      <Route path="/completed" element={<CompletedTodoList/>} />
    </Routes>
    
    // <div>
    //        <LoginPage/>
    //        <RegisterPage/>
    //        <Header />
    //        <TodoApp />
    // </div>
  );
}







export default App;
