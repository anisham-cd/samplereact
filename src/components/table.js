import React, { useState, useEffect } from 'react';
// import "src/App.css"
function TableData() {
     const [data, setData] = useState([])
    const URL = "http://localhost:3002/api/v1/login/getloginData";
    useEffect(() => {
        const fetchData = (() => {
            fetch(URL)
                .then((res) =>
                    res.json())

                .then((response) => {
                    // console.log(response);
                    // console.log("data-->",data)
                    setData(response.data);
                    console.log("---getting data---",data)
                })
            })
            fetchData()
    });
return (
        <>
            <h1>Table</h1>
            <table>
                <tbody>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>

                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                        </tr>

                    ))}

                </tbody>

            </table>
        </>
    );
}

export default TableData;

// // function TableData(){
// //    const tbldata=data.map(
// //         (info)=>{
// //             return(
// //                 <tr>
// //                     <td>{info.first_name}</td>
// //                     <td>{info.last_name}</td>
// //                     <td>{info.email}</td>
// //                     <td>{info.password}</td>
// //                 </tr> )
// //                 axios.post(baseURL, loginData)
// //                 .then((response) => {
// //                   let data= response.data;
// //                   console.log(response);
// //                 })
                
// //   } )
 
// //   return(
// //         <div>
// //             <h1>--Data Table--</h1>
// //             <table class="table table-striped">
// //                 <thead>
// //                     <tr>
                   
// //                     <th>first_name</th>
// //                     <th>last_name</th>
// //                     <th>email</th>
// //                     <th>password</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                  {tbldata}
                 
// //                    </tbody>
// //                     </table>
// //                      </div>
                     
// //  ) 
 

// //   }
 
// // export default  TableData ;

// import React, { useState, useEffect } from 'react';
// // import '../tabledata.css';
 
// function TableData() {
//     const [data, getData] = useState([])
//     const URL = 'http://localhost:3002/api/v1/login/getloginData';

//     useEffect(() => {
//         //     fetchData()
//         // }, [])


//         // const fetchData = () => {
//         fetch(URL)
//             .then((res) =>
//                 res.json())

//             .then((response) => {
//                 console.log(response);
//                 getData(response);
//             })
//     })
//     // }



//     return (
//         <>
//           <table>
            
//             <tbody>
// {/*           
//             <h1>Table</h1> */}
//                 <tr>
//                     <th>firstName</th>
//                     <th>lastName</th>
//                     <th>email</th>
//                     <th>password</th>
//                 </tr>
//                 {data.map((item, i) => (
//                     <tr key={i}>
//                         <td>{item.firstName}</td>
//                         <td>{item.lastName}</td>
//                         <td>{item.email}</td>
//                         <td>{item.password}</td>
//                     </tr>
//                 ))}
             
//             </tbody>
//             </table>

//         </>
//     );
// }

// export default TableData;