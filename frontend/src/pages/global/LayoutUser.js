import { Box } from '@mui/material';
import React from 'react'
import HeaderTop from './HeaderTop';
import SidebarUser from './SideBarUser';

const LayoutUser = (Component) => ({...props}) => {
    return (
        <>
            <div style={{ display: 'flex', minHeight: "100vh" }}>
                <SidebarUser />
                <Box  sx={{ width: "100%", bgcolor: "#002952"}}>
                    <HeaderTop />
                    <Box sx={{ p: 3 }}>
                        <Component {...props}/>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default LayoutUser