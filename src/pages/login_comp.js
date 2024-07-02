import React,{useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme,Avatar,Button } from '@mui/material'
import LockClockOutlined from '@mui/icons-material/LockClockOutlined'
import TextField from '@mui/material/TextField';
import { useHistory}  from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

const Login=()=>{
   const navigate=useNavigate();
    const [uname,setUName]=useState("")
    const[pwd,setPwd]=useState("")
//    const[isUserLoggedIn,setIsUserLoggedIn]=useState(false);
//    const[isAdminLoggedIn,setIsAdminLoggedIn]=useState(true);
    const submitForm=(e)=>{
        e.preventDefault();
        if(uname && pwd)
        {
            let data={};
           if(uname=='admin')
           {
                if(pwd=='cvr')
                     navigate('/admin/ViewPostedJobs',{replace:true})
                else
                    toast.error('invalid credentials')
           }
           else
           {
                axios.post(`http://localhost:8000/api/login`,{rollnumber:uname,password:pwd})
                .then((res)=>{
                    data=res.data;
                    console.log(data.student);
                    localStorage.setItem("userData", JSON.stringify(data.student));

                // localStorage.setItem("userData", data.student);
                    navigate('/user/AppliedJobs');
                })
                .catch((err)=>{
                    console.log(err);
                    toast.error("invalid credentials");
                })

           }
            
            // if(isUserLoggedIn)
            // {
                
            //         const data = uname;
            //         localStorage.setItem("userData", data);
            //         navigate('/user/AppliedJobs');
            // }
            // if(isAdminLoggedIn)
            // {
            //     navigate('/admin/ViewPostedJobs',{replace:true})
            // }
           
            // setUName("");
            // setPwd("")
        }
        else
         toast.error("Username/Password can't be empty");
       
    }
    return(
        <>
        <Box onSubmit={submitForm} component="form" className='form_style border-style'sx={{height: '81vh',mx:"10",my:"1", display: "flex", alignItems: "center", justifyContent: "center"}} >
         {/* if component given as form then only submitJob is executing */}
             <Box sx={{align:"center",m:'1',display:"flex",flexDirection:"column",alignItems:"center"}}>
      
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockClockOutlined />
                        </Avatar>

                        <TextField  sx={{mb:3}} name="username" placeholder="username" value={uname} onChange={(e)=>{setUName(e.target.value)}} />
                        <TextField sx={{mb:3}}type="password" name="password" placeholder="password" value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
                        {console.log(uname+" "+pwd)}
                        <Button type="submit" variant="contained" sx={{mb:3}}>Login</Button>
                
                
            </Box>
        </Box>
        </>
    )
}
export default Login;