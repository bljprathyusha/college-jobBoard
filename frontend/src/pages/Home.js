import React from 'react'
import { Typography,Button } from '@mui/material'
import Login from './login_comp'
import { useState } from 'react'
import {Box} from '@mui/material'
import bgimage from '../images/bg1.jpg'
function Home() {
    const [showLogin,setShowLogin]=useState(false)
  const handleLogin=()=>{
    setShowLogin(!showLogin)
  }
  return (
    <>
  <Box sx={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '85vh',
  bgcolor: '',
  backgroundImage: `url('${bgimage}')`
}}>
  <Typography variant='h1' sx={{ color: 'beige' }}>Welcome to </Typography>
  <Typography variant='h1' sx={{ color: 'beige' }}>College Job Board!</Typography>
  <Typography variant='h5' sx={{mt:5,color:'beige'}}>Track students or jobs with just one click!</Typography>
</Box>

    <Box sx={{ width: "100%",height:"10vh"}}>
    <Button type="submit" variant="contained" display="flex" justifyContent="center" alignItems="center" sx={{m:3,mx:80}} onClick={handleLogin}>Get started</Button>
    {showLogin &&<Login/>}
    </Box>
    </>
    
  )
}

export default Home