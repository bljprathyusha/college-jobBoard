import React, { useState } from "react";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
const ViewProfile=()=>{
    const [userData,setUserData]=useState({});
    const [appliedJobsCnt, setAppliedCnt] = useState();
    useEffect(()=>{
        let data = localStorage.getItem("userData");
        console.log(data);
        if(data){
            const uD=JSON.parse(data);
           // console.log(uD);
            setUserData(uD);     
        }
       
    },[userData])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/appliedjobscount/${userData.rollnumber}`)
      .then((res) => {
        setAppliedCnt(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    })

    return(
        <>
         <Typography variant="h4"sx={{mt:4,mb:4,color:"white"}}>Your Profile</Typography>
        <Box variant="h5" sx={{  color: '#b2dfdb' }}>
            <table cellSpacing={10} style={{fontSize:'20px'}}>
            <tr>
                <td style={{textAlign:'center',padding:'20px'}}>Rollnumber</td><td>:&emsp;{userData.rollnumber}</td></tr> 
            <tr><td style={{textAlign:'center',padding:'20px'}}>Username</td><td>:&emsp;{userData.username}</td></tr>
            <tr><td style={{textAlign:'center',padding:'20px'}}>Branch</td><td>:&emsp;{userData.branch}</td></tr>
            <tr><td style={{textAlign:'center',padding:'20px'}}>Stream</td><td>:&emsp;{userData.stream}</td></tr>
            <tr><td style={{textAlign:'center',padding:'20px'}}>CGPA</td><td>:&emsp;{userData.cgpa}</td></tr>
            <tr><td style={{textAlign:'center',padding:'20px'}}>Applied Jobs</td><td>:&emsp;{appliedJobsCnt}</td></tr>
            </table>
        </Box>
        </>
    )
    }
    export default ViewProfile;