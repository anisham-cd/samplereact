import * as React from 'react';
import Table from './components/table';
import Login from '../src/login'
// import TableEdit from '../src/components/tableEdit'

import { Container } from "@mui/system"


export default function App() {
  return (

  <Container component="main" >
      <Table/>
       <Login/>
       {/* <TableEdit/> */}
       </Container>
       )
      }
