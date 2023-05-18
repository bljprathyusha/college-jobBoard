import React,{useEffect, useState} from "react";
import StudentDashboard from "./user/StudentDashboard";
import PlacementsDashboard from "./admin/PlacementsDashboard";
import { useNavigate } from "react-router-dom";
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme,Avatar,Button } from '@mui/material'
import LockClockOutlined from '@mui/icons-material/LockClockOutlined'
import TextField from '@mui/material/TextField';

const Login=()=>{
    const navigate=useNavigate();
    const [uname,setUName]=useState("")
    const[pwd,setPwd]=useState("")
    // const [allEntry,setAllEntry]=useState([]);
   const [sessionData,setsessionData]=useState();
   const[isUserLoggedIn,setIsUserLoggedIn]=useState(false);
   const[isAdminLoggedIn,setIsAdminLoggedIn]=useState(true);
    const submitForm=(e)=>{
        e.preventDefault();
        if(uname && pwd)
        {
            // const newEntry={uname:uname,pwd:pwd};
            // setAllEntry([...allEntry,newEntry]);
            //if placement uname and pwd setIsAdminLoggedIn as true , if student fetch details check it and update setIsUSerLOggedIn as true
            
            if(isUserLoggedIn)
            {
                navigate('/user/StudentDashboard',{replace:true})
            }
            if(isAdminLoggedIn)
            {
                navigate('/admin/PlacementsDashboard',{replace:true})
            }
           
            setUName("");
            setPwd("");
        }
        else
         alert("not filled details");
       
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
                        <Button type="submit" variant="contained" sx={{mb:3}}>Login</Button>
                
                
            </Box>
            </Box>
        </>
    )
}
export default Login;