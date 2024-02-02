const Todo=require("../models/Todo");
// const User=require("../models/User");


exports.deleteTodo = async (req, res) => {
    try {
      const { id} = req.params;
  console.log(id)
      // Delete the todo by ID
      const deletedTodo = await Todo.findByIdAndDelete(id);
  console.log(deletedTodo)
      // Remove the deleted todo's ID from the user's todos array
      // await User.findByIdAndUpdate(userId, { $pull: { todos: id } });
  
      res.status(200).json(deletedTodo);
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };