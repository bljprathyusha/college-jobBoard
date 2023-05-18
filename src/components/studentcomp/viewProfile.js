import React from "react";
import { usersdata } from "../../usersdata";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
const ViewProfile=()=>{
    return(
        <Box >
            <Typography variant="h4"sx={{mt:4,color:"white"}}>Your Profile</Typography>
            <Typography sx={{mt:4,color:"white"}}>{usersdata[0].username}</Typography> 
            <Typography sx={{mt:4,color:"white"}}>{usersdata[0].password}</Typography>

        </Box>
    )
    }
    export default ViewProfile;