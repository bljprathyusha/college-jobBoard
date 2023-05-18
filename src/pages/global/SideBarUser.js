import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, menuClasses ,ProSidebarProvider} from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


const SidebarUser = () => {
   // const { userInfo } = useSelector(state => state.LogIn); ----need to get userinfo
    // const { palette } = useTheme();
    //const { collapsed } = useProSidebar();
   // const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     dispatch(userProfileAction());
    // }, []);

    //log out 
    const logOut = () => {
        // dispatch(userLogoutAction());
      //  window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }


    return (
        <>
        <ProSidebarProvider>
            <Sidebar backgroundColor="#003366" style={{ borderRightStyle: "none" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                    <Box>
                        <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>

                            
                               
                                    {/* <Avatar alt="logo dashboard" src={Person3Icon} /> */}

                        </Box>

                        <Menu

                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green",
                                    },
                                    '&:hover': {
                                        backgroundColor: "rgba(23,105,170, 1)",
                                        color: "#fafafa",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: "blue",
                                       
                                    }
                                },
                            }}

                        >
                           
                               {/* userInfo && userInfo.role === 1 ? */}
                                    {/* <>
                                        <MenuItem component={<Link to="/admin/PlacementsDashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/admin/ViewStudents" />} icon={<GroupAddIcon />}> View Students </MenuItem>
                                        <MenuItem component={<Link to="/admin/ViewPostedJobs" />} icon={<WorkIcon />}> View Posted Jobs </MenuItem>
                                        <MenuItem component={<Link to="/admin/PostJob" />} icon={<CategoryIcon />}> Post Job </MenuItem>
                                     </> */}
                                    {/* : */}
                                    <>
                                         <MenuItem component={<Link to="/user/StudentDashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                         <MenuItem component={<Link to="/user/ViewProfile" />} icon={<Person3Icon />}> View Profile </MenuItem>
                                         <MenuItem component={<Link to="/user/AppliedJobs" />} icon={<WorkHistoryIcon />}>Jobs for You </MenuItem>
                                    </>                           

                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Menu
                        menuItemStyles={{


                            button: {
                                [`&.${menuClasses.button}`]: {
                                    color: "#fafafa",
                                },
                                [`&.${menuClasses.disabled}`]: {
                                    color: "green",
                                },
                                '&:hover': {
                                    backgroundColor: "rgba(23,105,170, 1)",
                                    color: "#fafafa",
                                },
                            },

                            icon: {
                                [`&.${menuClasses.icon}`]: {
                                    color: "blue",
                                   
                                }
                            },
                        }}>
                            <MenuItem onClick={logOut} icon={<LoginIcon />}>   Log out </MenuItem>
                        </Menu>
                    </Box>
                </Box>
           
            </Sidebar>
            </ProSidebarProvider>
        </>
    )
}

export default SidebarUser