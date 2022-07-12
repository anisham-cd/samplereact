
import React from 'react';
import JsonData from '../login.json';

function JsonDataDisplay(){
   const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.first_name}</td>
                    <td>{info.last_name}</td>
                    <td>{info.email}</td>
                    <td>{info.password}</td>
                </tr> )
                
  } )
 
  return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                   
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
 
 // fs.writeFileSync(JsonData.resolve(__dirname, './src/login.json'), JSON.stringify(result));

  }
 
export default JsonDataDisplay ;

