// import { TableContainer,TableHead,TableBody,TableRow,Paper, TableCell } from '@mui/material';

// import React from 'react'
// import login from './login/login.json';

// function Table() {
   
//   return (
//   <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
//       <login>
//      <TableHead>
      
//      <TableRow>
//             <TableCell>id</TableCell>
//             <TableCell>firstName</TableCell>
//             <TableCell>lastName</TableCell>
//             <TableCell>email</TableCell>
//             <TableCell>password</TableCell>
//         </TableRow>
//        </TableHead>
//         <TableBody>
//         {login.map((row)=>(
//             <TableRow key={row.id} >
             
//              <TableCell>id</TableCell>
//              <TableCell> first_name</TableCell>
//              <TableCell>last_name</TableCell>
//              <TableCell>email</TableCell>
//              <TableCell>password</TableCell>
//             </TableRow>
//         ))}
    
//         </TableBody>
//         </login>
       
// </TableContainer>

//   )
// }


// // export default Table


import React from 'react'
import JsonData from '../login.json';
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.first_name}</td>
                    <td>{info.last_name}</td>
                    <td>{info.email}</td>
                    <td>{info.password}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                    <th>password</th>
                    </tr>
                </thead>
                <tbody>
                  {DisplayData}
                    
                 
             </tbody>
         </table>
          
     </div>
 )
}

export default JsonDataDisplay;