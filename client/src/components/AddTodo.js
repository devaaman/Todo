// AddTodo.js
// import React, { useState } from "react";
// import axios from "axios";

// function AddTodo() {

// const [user, setUser] = useState(null);
//   const [title, setTitle] = useState("");
//   useEffect(() => {

//     const v = JSON.parse(localStorage.getItem("user"));
    
   

//     if (v) {
//       setUser(v);
//     }
//     console.log("user222", user);
//   }, []);

//   useEffect(() => {
//     const v = JSON.parse(localStorage.getItem("user"));
//     const u = v._id;
//     console.log("11user", u);

//     if (v) {
//       setUser(v);
//     }
//   }, []); // Remove the dependency array to make it run once on mount

//   useEffect(() => {
//     console.log("user222", user); // This will log the updated state
//   }, [user]); // Add user as a dependency


//   const handleAddTodo = async () => {
//     try {
//       // Make sure user is an object before accessing properties
//       if (user && user._id) {
//         // Make an API call to store the Todo in the database
//         const response = await axios.post('http://localhost:5000/api/v1/createTodo', { userId: user._id, title });
//         console.log(response.data); // You can handle the response accordingly

//         // Clear the input field after successful addition
//         setTitle("");
//       } else {
//         console.error("User information is not available.");
//       }
//     } catch (error) {
//       console.error("Error adding Todo:", error);
//     }

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Add Todo</h2>
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Todo title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <button
//               className="btn btn-primary"
//               type="button"
//               onClick={handleAddTodo}
//             >
//               Add Todo
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// }
// export default AddTodo;
