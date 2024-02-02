// const Todo=require("../models/Todo");
// const User=require("../models/User");

// exports.updateTodo = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { desc, isCompleted } = req.body;
  
//       // Update the todo by ID
//       const updatedTodo = await Todo.findByIdAndUpdate(
//         id,
//         { desc, isCompleted },
//         { new: true }
//       );
  
//       res.status(200).json(updatedTodo);
//     } catch (error) {
//       console.error('Error updating todo:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

// controllers/updateTodo.js
const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
         console.log(id);
        // Update the todo by ID
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { $set: { isCompleted: true, updatedAt: new Date() } },
            { new: true }
        );
         console.log(updatedTodo)
        // Check if the updatedTodo is null
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
