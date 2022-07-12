import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import  Components  from './components/table';
// import fs,{writeFile} from 'fs';
import Table from './components/table';
import JsonData from '../src/login.json';
import fs,{writeFile} from 'fs';


export default function Submit() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataValue = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log("the data-->", dataValue)

    let result = JSON.stringify(dataValue, null, 2)
    console.log(result)
    writeData(result);
     console.log( "Json file",JsonData );
     console.log("result",result);
  };
function writeData(result){
    fs.writeFile("../src/login.json",result,(err)=>{
    if(err) throw err;
   })
  //  writeFile()

}
// writeFile()
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
    </Container>


  );
  }