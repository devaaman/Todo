// const Todo=require("../models/Todo");
// // const User=require("../models/User");


// exports.getTodos= async (req, res) => {
//     try {
//       const { userId } = req.params;
  
//       // Get all todos for the user
//       const todos = await Todo.find({ userId });
  
//       res.status(200).json(todos);
//     } catch (error) {
//       console.error('Error fetching todos for user:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    try {
        const { userId } = req.params;

        // Log the userId to check if it's correctly extracted
        console.log('userId:', userId);

        // Get all todos for the user
        const todos = await Todo.find({ userId });

        // Log the fetched todos for debugging
        console.log('Fetched todos:', todos);

        res.status(200).json(todos);
    } catch (error) {
        console.error('Error fetching todos for user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
