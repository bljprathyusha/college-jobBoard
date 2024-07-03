import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login_comp';

import Home from './pages/Home';

import ViewProfile from './components/studentcomp/viewProfile';
import AppliedJobs from './components/studentcomp/applyJobs';
import usersdata from "./usersdata";
import ViewStudents from './components/admin/ViewStudents';
import ViewPostedJobs from './components/admin/ViewPostedJobs';
import PostJob from './components/admin/PostJob';
import EditJob from './components/admin/EditJob';
import {Link} from 'react-router-dom';
import { Button ,Typography} from '@mui/material';
import { useState } from 'react';
import LayoutAdmin from './pages/global/LayoutAdmin';
import LayoutUser from './pages/global/LayoutUser';
import CreateStudent from './components/admin/CreateStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
//Lauout for Placement
const ViewStudentsLayout=LayoutAdmin(ViewStudents);//Looks like all(All that using LayoutAdmin) in one page but same layout  renders in every psge 
const ViewPostedJobsLayout=LayoutAdmin(ViewPostedJobs);
const PostJobLayout=LayoutAdmin(PostJob)
const CreateStudentLayout=LayoutAdmin(CreateStudent);
const EditJobLayout=LayoutAdmin(EditJob);
//Lauout for Student

const AppliedJobsLayout=LayoutUser(AppliedJobs)
const ViewProfileLayout=LayoutUser(ViewProfile)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/login" exact element={<Login/>}></Route>
        {/* <Route path="/user/StudentDashboard" element={<StudentDashboardLayout/>}></Route> */}
        <Route path="/user/ViewProfile" exact element={<ViewProfileLayout/>}></Route>
        <Route path="/user/AppliedJobs" exact element={<AppliedJobsLayout/>}></Route>
        <Route path="/admin/ViewStudents" exact element={<ViewStudentsLayout/>}></Route>
        <Route path="/admin/ViewPostedJobs" exact element={<ViewPostedJobsLayout/>}></Route>
        <Route path="/admin/PostJob" exact element={<PostJobLayout/>}></Route>
        <Route path="/admin/CreateStudent" exact element={<CreateStudentLayout/>}></Route>
        <Route path="/admin/EditJob" exact element={<EditJobLayout/>} />
        {/* <Route path="/" element={<App/>}></Route> */}
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </>
  );
}

export default App;
