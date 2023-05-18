import React from 'react'
import { Typography,Button } from '@mui/material'
import Login from './login_comp'
import { useState } from 'react'
import {Box} from '@mui/material'
import bgimage from '../images/bg.jpg'
function Home() {
    const [showLogin,setShowLogin]=useState(false)
  const handleLogin=()=>{
    setShowLogin(!showLogin)
  }
  return (
    <>
    <Box sx={{ width: "100%",height:"50vh", bgcolor: "#83c3f7",backgroundImage:`url('${bgimage}')`}}>
    <Typography variant='h1' sx={{color:"beige"}}>Welcome to CVR College Job Board</Typography>
    </Box>

    <Box sx={{ width: "100%",height:"10vh"}}>
    <Button type="submit" variant="contained" display="flex" justifyContent="center" alignItems="center" sx={{m:3,mx:90}}onClick={handleLogin}>Login</Button>
    {showLogin &&<Login/>}
    </Box>
    </>
    
  )
}

export default Home