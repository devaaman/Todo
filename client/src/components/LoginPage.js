// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { URL } from './config';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  // const {user,setUser}=useContext(AuthContext);
  const handleLogin = async () => {
    try {
      // Make API call using Axios
      const response = await axios.post(URL+'/login', {
        email,
        password,
      });
      // const { user, token } = response.data;

      // // Store the token and user information in local storage
      // localStorage.setItem('token', token);
      // localStorage.setItem('user', JSON.stringify(user));

      // Assuming your backend returns some data upon successful login
      if (response.data && response.data.success) {
        // Authentication successful, handle success logic
        navigate('/')
        console.log(response.data);
        // user=response?.data?.user;
        // setUser(response?.data?.user);
        const { user, token } = response.data;

        // Store the token and user information in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        console.log("I am aman");
        console.log(token);
        toast.success("login successful")
        
      } else {
        // Authentication failed, handle error logic
        toast.error("login failed");
        console.error('Login failed');
      }
    } catch (error) {
      // Handle API call error
      toast.error("api call error");
      console.error('Error during login:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '20px' }}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;

