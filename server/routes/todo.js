// routes/todo.js
const express = require("express");
const router = express.Router();
const { signup, login ,logout,refetch} = require("../controllers/Auth");
const {createTodo}=require("../controllers/createTodo")
const{deleteTodo}=require("../controllers/deleteTodo");
const {getTodos}=require("../controllers/getTodos");
const {updateTodo}=require("../controllers/updateTodo");
router.post("/createTodo", createTodo);
// router.get("/getTodos", getTodos);
router.get("/getTodos/:userId", getTodos);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/refetch",refetch);


module.exports = router;
