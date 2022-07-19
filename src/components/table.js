
import React, { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import EditLogin from './tableEdit';
import axios from 'axios';

// import TableEdit from './tableEdit';
import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead, Box } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { textAlign } from '@mui/system';
import Typography from '@mui/material/Typography';

function TableData() {
// const{Table,Columns}=useTable({Columns,data,},useFilters)
    const [data, setData] = useState([])
    // const [editDataId, setDataId] = useState([])

    const getURL = "http://localhost:3002/api/v1/login/getloginData";
    const editURL = "http://localhost:3002/api/v1/login/edit";


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

    function detail(event) {
        event.preventDefault();

        axios.put(editURL)
            .then((response) => {
                let data = response.data;
                console.log(response);
            })
        //         let navigate = useNavigate();

        //         const detail = (state) => {
        //           navigate(TableEdit, { state });
        //         };
    }

    return (

        <TableContainer sx={{ maxHeight: '300px', maxWidth: '900px' }}>
            {/* <EditLogin/> */}
            {/* <form> */}

            <Typography component="h1" variant="h5" >
                ---Login Table---
            </Typography>
            <Box component="form" onSubmit={detail} >
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

                                <TableCell align='center'>{item.id}
                                    <input
                                        type='text'
                                        required='required'
                                        placeholder='Enter loginId...'
                                        name='id'>
                                    </input>
                                </TableCell>
                                <TableCell align='center'>{item.firstName}
                                    <input
                                        type='text'
                                        required='required'
                                        placeholder='Enter firstName...'
                                        name='firstName'>
                                    </input>
                                </TableCell>
                                <TableCell align='center'>{item.lastName}
                                    <input
                                        type='text'
                                        required='required'
                                        placeholder='Enter lastName...'
                                        name='lastName'>
                                    </input>
                                </TableCell>
                                <TableCell align='center'>{item.email}
                                    <input
                                        type='email'
                                        required='required'
                                        placeholder='Enter email...'
                                        name='email'>
                                    </input>
                                </TableCell>
                                <TableCell align='center'>{item.password}
                                    <input
                                        type='text'
                                        required='required'
                                        placeholder='Enter password...'
                                        name='password'>
                                    </input>
                                </TableCell>
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
            </Box>
            {/* </form> */}
        </TableContainer>

    );
}


export default TableData;



