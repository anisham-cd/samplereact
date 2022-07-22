// import react from 'react';

// const editRow=()=>{
//     return(
//         <tr>
//             <td>
//              <td>
//                 <input
//                 type='text'
//                 required='required'
//                 placeholder='Enter loginId...'
//                 name='firstName'>
//                 </input>
//             </td>
//             <td>
//                 <input
//                 type='text'
//                 required='required'
//                 placeholder='Enter firstName...'
//                 name='firstName'>
//                 </input>
//             </td>
//             <td>
//             <input
//                 type='text'
//                 required='required'
//                 placeholder='Enter lastName...'
//                 name='lastName'>
//                 </input>
//             </td>
//             <td>
//             <input
//                 type='email'
//                 required='required'
//                 placeholder='Enter email...'
//                 name='email'>
//                 </input>
//             </td>
//             <td>
//             <input
//                 type='text'
//                 required='required'
//                 placeholder='Enter password...'
//                 name='password'>
//                 </input>
//             </td>
//             </td>
//         </tr>
//     )
// }
// export default editRow;
import { createFilterOptions } from '@mui/material/Autocomplete';
import Autocomplete from '@mui/material/Autocomplete';
// import { title } from 'process';
//   const TableEdit{
//     return(
    // const TableEdit{
    const str = undefined;
    // createFilterOptions(config.LowerCase) => filterOptions
const filterOptions = createFilterOptions({
// const str=undefined;
   
    LowerCase:'true',
    matchFrom: 'start',
    // process:'false',
    stringify: (option) => option.firstName,
  });
//   createFilterOptions(config) => filterOptions
 str.toLowerCase();
  <Autocomplete filterOptions={filterOptions} />;
//   return(
//     <Autocomplete
//   id="virtualize-demo"
//   sx={{ width: 300 }}
//   disableListWrap
//   PopperComponent={StyledPopper}
//   ListboxComponent={ListboxComponent}
//   options={OPTIONS}
//   groupBy={(option) => option[0].toUpperCase()}
//   renderInput={(params) => <TextField {...params} label="10,000 options" />}
//   renderOption={(props, option) => [props, option] as React.ReactNode}
//   // TODO: Post React 18 update - validate this conversion, look like a hidden bug
//   renderGroup={(params) => params as unknown as React.ReactNode}
// />
//   )
// //     )
 
export default filterOptions;
  