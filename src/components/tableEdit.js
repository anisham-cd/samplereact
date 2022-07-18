import react from 'react';

const editRow=()=>{
    return(
        <tr>
            <td>
                <input
                type='text'
                required='required'
                placeholder='Enter firstName...'
                name='firstName'>
                </input>
            </td>
            <td>
            <input
                type='text'
                required='required'
                placeholder='Enter lastName...'
                name='lastName'>
                </input>
            </td>
            <td>
            <input
                type='text'
                required='required'
                placeholder='Enter email...'
                name='email'>
                </input>
            </td>
            <td>
            <input
                type='text'
                required='required'
                placeholder='Enter password...'
                name='password'>
                </input>
            </td>
        </tr>
    )
}