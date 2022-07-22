
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
// import EditLogin from './tableEdit';
import axios from 'axios';
import TableEdit from '../components/tableEdit';
// import { GlobalFilter } from './GlobalFilter';
// import TableEdit from './tableEdit';
// import Table1 from './table1';
// import Login from '../login'
import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead, Box } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { textAlign } from '@mui/system';
import Typography from '@mui/material/Typography';

// import e from 'cors';

function TableData() {
    // const { state, setGlobalFilter } = useTable(useGlobalFilter)
    // const { globalFilter } = state
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
        fetchData()}, [])

    function detail(event) {
        event.preventDefault();

        axios.put(editURL)
            .then((response) => {
                let data = response.data;
                console.log(response);
                console.log(data)
            })
        //         let navigate = useNavigate();

        //         const detail = (state) => {
        //           navigate(TableEdit, { state });
        //         };


    }

return (
<TableContainer sx={{ maxHeight: '500px', maxWidth: '1000px' }}>
    {/* <Login/> */}
    {/* <Table1/> */}
    <TableEdit/>
            {/* <EditLogin/> */}
            {/* <form> */}
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
            <Typography component="h1" variant="h5" textAlign={'center'}>
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

                                </TableCell>
                                <TableCell align='center'>{item.firstName}

                                </TableCell>
                                <TableCell align='center'>{item.lastName}

                                </TableCell>
                                <TableCell align='center'>{item.email}

                                </TableCell>
                                <TableCell align='center'>{item.password}

                                </TableCell>

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
                </Table>



            </Box>

        </TableContainer>

    );
}



export default TableData;



