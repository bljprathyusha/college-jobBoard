import React from 'react'
import { Select, Typography,MenuItem } from '@mui/material';
import {Box,Button,TextField} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
function CreateStudent() {
    const [rollnumber,setRollNumber]=useState("")
    const[username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [branch,setBranch]=useState('')
    const [stream,setStream]=useState('')
    const [cgpa,setCgpa]=useState('')
    const [amcat,setAmcat]=useState('')
    const [eligibleJobs,setEligibleJobs]=useState('');
    const submitStudent=()=>{

    }
  return (
    <>
    <Box onSubmit={submitStudent} component="form" className='form_style border-style'sx={{align:"center",m:'2',display:"flex",flexDirection:"column",alignItems:"center"}}> 
      {/* if component given as form then only submitJob is executing */}
      <Typography variant='h4' sx={{mt:4,color:"white"}}>Create Student </Typography>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <WorkIcon/>
                        </Avatar>

                        <TextField  sx={{width:350,mb:3,  "& input": {color: 'white'}}} name="Roll Number" placeholder="Roll Number" value={rollnumber} onChange={(e)=>{setRollNumber(e.target.value)}} />
                        <TextField sx={{width:350,mb:3,"& input": {color: 'white'}}} name="UserName" placeholder="UserName" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="Password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}}  name="Branch" placeholder="Branch" value={branch} onChange={(e)=>{setBranch(e.target.value)}} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="Stream" placeholder="Stream" value={stream} onChange={(e)=>{setStream(e.target.value)}} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="CGPA" placeholder="CGPA" value={cgpa} onChange={(e)=>{setCgpa(e.target.value)}} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="Amcat" placeholder="Amcat" value={amcat} onChange={(e)=>{setAmcat(e.target.value)}} />

                        <Button type="submit"  variant="contained" sx={{mb:3}}>Create Student</Button>
                
                
    </Box>

    </>
  )
}

export default CreateStudent