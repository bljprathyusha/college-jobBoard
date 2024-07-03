import React, { useEffect, useState } from 'react'
import {Box,Button,TextField,Typography,Avatar} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import axios from 'axios';
function EditStudent(props) {
 
 let [studnt,setStudnt]=useState({
  jobid:"",
    username:"",
    branch:"",
    stream:"",
    cgpa:""
  })
  // if(!props.showEdit)
  // {
  //   return false;       //idea from conditional rendering of react documentation
  // }
  useEffect(() => {
    setStudnt(props.stud);
    console.log(studnt);
  }, [props.stud]); //this helps automatically toggle the component status

  const handleChange=(e)=>{
    setStudnt((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    console.log(studnt);
    
  }
  const handleSubmit=()=>{
    let rn=props.stud.rollnumber;
    axios.put(`http://localhost:8000/api/studentupdate/${rn}`,studnt)  
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  }
  return (
    // <div>{stud.rollnumber},{stud.branch},{stud.cgpa}</div>
    <Box onSubmit={handleSubmit} component ="form" className='form_style border-style'sx={{align:"center",m:'2',display:"flex",flexDirection:"column",alignItems:"center"}}>
        {console.log(studnt)}
                            <Typography variant='h4' sx={{mt:4,color:"white"}}>EditStudent</Typography>
                              <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                                  <WorkIcon/>
                              </Avatar>
      
                              <TextField sx={{width:350,mb:3,"& input": {color: 'white'}}} name="username" placeholder="username"  value={studnt.username} onChange={handleChange}/>
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="branch" placeholder="branch" value={studnt.branch} onChange={handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}}  name="stream" placeholder="stream"  value={studnt.stream} onChange={handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="cgpa" placeholder="cgpa"  value={studnt.cgpa} onChange={handleChange} />
                             
                              <Button type="submit"  variant="contained" sx={{mb:3}}>Edit Student</Button> 

     </Box>
  )

}

export default EditStudent