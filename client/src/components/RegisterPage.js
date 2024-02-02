// RegisterPage.js

import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your registration API endpoint
      const response = await axios.post('http://localhost:5000/api/v1/signup', formData);

      // Handle the response (you can check the response status and show appropriate messages)
      console.log('Registration successful:', response.data);
      navigate("/login")
      toast.success('Success message!');
      // Perform additional actions if needed (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration error:', error.response.data);
      toast.error("Problem in registration")
      // Handle registration error (e.g., show an error message to the user)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" spacing={2}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
