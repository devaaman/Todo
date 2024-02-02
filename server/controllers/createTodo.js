const Todo=require("../models/Todo");
const User=require("../models/User");

exports.createTodo = async (req, res) => {
    try {
      const { userId, desc } = req.body;
  
      // Create a new todo
      const newTodo = await Todo.create({ userId, desc });
  
      // Insert the new todo's ID into the user's todos array
      await User.findByIdAndUpdate(userId, { $push: { todos: newTodo._id } });
  
      res.status(201).json(newTodo);
    } catch (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };