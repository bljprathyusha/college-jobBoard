import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function ViewStudents() {
    const [students,setStudents]=useState([]);
    const navigate=useNavigate();
    fetch("http://localhost:8000/api/students",{
                method: 'GET', 
                headers:{
                    'Access-Control-Allow-Origin': 'http://localhost:8000'
                }
              }).then(res=>res.json())
            .then(data=>setStudents(data))
            console.log(setStudents)
   const handleCreateStudent=()=>
    {
            navigate('/admin/CreateStudent');
    }
  return (
    <Typography sx={{color:"white"}}>
        <Button  variant="contained" sx={{mb:3}} onClick={handleCreateStudent}>+Create Student</Button>
     <Typography sx={{color:"white"}}>View Students</Typography>
        <table cellSpacing={10} >
            <thead>
            <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Stream</th>
                <th>Email</th>
                <th colSpan={2}>Actions</th>
            </tr>
            </thead>
            <tbody>
                {students.map(s=>
                    <tr>
                        <td>{s.rollnumber}</td>
                        <td>{s.name}</td>
                        <td>{s.stream}</td>
                        <td>{s.email}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>)}
            </tbody>
            <tfoot>

            </tfoot>

</table>
</Typography>
  )
}

export default ViewStudents