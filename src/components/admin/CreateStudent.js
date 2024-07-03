import React, { Component } from 'react'
import { Select, Typography,MenuItem } from '@mui/material';
import {Box,Button,TextField} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
class CreateStudent extends Component {
  constructor()
  {
    super()
        this.state={
                    
               rollnumber:'',
               username:'',
               password:'',
               branch:'',
               stream:'',
               cgpa:'',
               amcat:'',
           
            }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
    console.log(this.state)
}
   
    submitStudent=(event)=>{
      event.preventDefault();
      axios.post("http://localhost:8000/api/students",this.state)
        .then((res)=>{
             toast.success("Added student successfully")
            console.log(res);
        })
        .catch((err)=>{
          toast.error("Student already exists")
            console.log(err)
        })
    }
    render(){
      const {rollnumber,username,password,branch,stream,cgpa,amcat}=this.state;
  return (
    <>
    <Box onSubmit={this.submitStudent} component="form" className='form_style border-style'sx={{align:"center",m:'2',display:"flex",flexDirection:"column",alignItems:"center"}}> 
      {/* if component given as form then only submitJob is executing */}
      <Typography variant='h4' sx={{mt:2,color:"white"}}>Create Student </Typography>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <WorkIcon/>
                        </Avatar>

                        <TextField  sx={{width:350,mb:3,  "& input": {color: 'white'}}} name="rollnumber" placeholder="Roll Number" value={rollnumber} onChange={this.handleChange} />
                        <TextField sx={{width:350,mb:3,"& input": {color: 'white'}}} name="username" placeholder="UserName" value={username} onChange={this.handleChange}/>
                        <TextField type="password" sx={{width:350,mb:3,"& input": {color: 'white'}}} name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}}  name="branch" placeholder="Branch" value={branch} onChange={this.handleChange} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="stream" placeholder="Stream" value={stream} onChange={this.handleChange} />
                        <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="cgpa" placeholder="CGPA" value={cgpa} onChange={this.handleChange} />
                        {/* <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="amcat" placeholder="Amcat" value={amcat} onChange={this.handleChange} /> */}

                        <Button type="submit"  variant="contained" sx={{mb:3}}>Create Student</Button>
                
                
    </Box>

    </>
  )
    }
}

export default CreateStudent