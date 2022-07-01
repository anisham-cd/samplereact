import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignUp() {
  const handleSubmit = (event) => {
   event.preventDefault();
    const data = new FormData(event.currentTarget);
     console.log({
      firstName:data.get ('firstName'),
      lastName:data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),

    });
};
 return (
  <Container component="main" maxWidth="xs">
<Typography component="h1" variant="h5">
   Login 
    </Typography>
     <Box component="form"  onSubmit={handleSubmit} >
  <TextField
      name="firstName"
       required
       fullWidth
       id="firstName"
       label="First Name"
       autoFocus/>
<TextField
       required
       fullWidth
       id="lastName"
       label="Last Name"
       name="lastName"/>
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
variant="contained"
>
Sign Up
</Button>
</Box>
</Container>


  );

}