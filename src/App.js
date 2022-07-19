 import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from './components/table';
import  MaterialTable from '@mui/material/Table';
 
 import axios  from 'axios';

 const baseURL = "http://localhost:3002/api/v1/login/add";


 export default function Submit() {
  
 const[filter,SetFilter]=React.useState(true)
   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      let firstName= data.get('firstName');
      let lastName= data.get('lastName');
      let email= data.get('email');
      let password=data.get('password');
  const loginData={firstName,lastName,email,password}
  
    console.log("the data-->", loginData)
    alert("---submitted successfully---")

  axios.post(baseURL, loginData)
      .then((response) => {
        let postData = response.data;
        console.log(response);
      })
      
      
};
 return (
   <Container component="main" maxWidth="xs">
      <Table />
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} >

        <TextField
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus />

        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName" />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
         <Button
          type="submit"
          fullWidth
          variant="contained">
          Submit
        </Button>
      </Box>
      <MaterialTable>
        title="login Table",
      
        options=(
          filtering=filter
        );
      </MaterialTable>
    </Container>


  );
  }