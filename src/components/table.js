
import React, { useState, useEffect } from 'react';
 import Button from '@mui/material/Button';
//  import Box from '@mui/material/Box'
 import axios from 'axios';
 import tableEdit from './tableEdit';

import { TableContainer, Table, Paper, TableBody, TableCell, TableRow,TableHead} from '@mui/material';
// import { textAlign } from '@mui/system';
 import Typography from '@mui/material/Typography';
// import EditIcon from '@mui/icons-material/Edit';
function TableData() {

    const [data, setData] = useState([])
  
    const getURL = "http://localhost:3002/api/v1/login/getloginData";
     const editURL="http://localhost:3002/api/v1/login/edit";
  
   
    useEffect(() => {
        const fetchData = (() => {
            fetch(getURL)
                .then((res) =>
                    res.json())
                .then((response) => {
                  setData(response.data);
                  console.log("---getting data---", data)
                })
        })
        fetchData()
    }, [])
    
// function onClick(event) {
//     event.preventDefault();

//     axios.put(editURL)
//       .then((response) => {
//         let data = response.data;
//         console.log(response);
//       })
const detail = (data) => {
     let id = data.id;
     const data1 = { id };
    console.log("hai data",data);
    axios
      .put(editURL, data)
      .then((response) => {
       let setPostData=(response.data);
       let setRows=(response.data.data);
      })

    }

    return (

        <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
            <tableEdit/>
            <Typography component="h1" variant="h5" >
                ---Login Table---
            </Typography>

            <Table>
                <TableHead> 
                    <TableRow>
                        <TableCell align='center'>id</TableCell>
                        <TableCell align='center'>FirstName</TableCell>
                        <TableCell align='center'>LastName</TableCell>
                        <TableCell align='center'>email</TableCell>
                        <TableCell align='center'>password</TableCell>
                    </TableRow>

                </TableHead> 

                <TableBody>
                    {data.map((item, i) => (
                        
                        <TableRow key={i}>
                            <TableCell align='center'>{item.id}</TableCell>
                            <TableCell align='center'>{item.firstName}</TableCell>
                            <TableCell align='center'>{item.lastName}</TableCell>
                            <TableCell align='center'>{item.email}</TableCell>
                            <TableCell align='center'>{item.password}</TableCell>
                            {/* <TableCell>{item.edit}</TableCell> */}
                            <TableCell><Button
                                variant="contained"
                                style={{
                                    color: "white",
                                    margin: "10px",
                                    background: "blue",
                                }}
                                onClick={() => detail(data)}>
                                Edit
                            </Button>
                            </TableCell>
                            </TableRow>

                    ))}
                </TableBody>

                {/*                            
                            <Button
          type="update"
          fullWidth
          variant="contained">
          update
        </Button> */}
                {/* <button 
               onClick={() => window.alert(`Clicked "Edit" for row`)}>
                Edit
              </button>
              </Box> */}
            </Table>
            
        </TableContainer>

    );
}


export default TableData;



