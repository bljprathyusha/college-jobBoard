import React, { Component, useState } from 'react'
import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ThermostatOutlined } from '@mui/icons-material';
import EditStudent from './EditStudent';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import UploadStudents from './UploadStudents';
class ViewStudents extends Component {
  constructor()
  {
  
    super();
    this.state={
      students:[],
      showEditStud:false,
      edistud:{},
      showUploadStudents:false
      //editroll:0
    }
  }
  componentDidMount()
  {
    this.fetchStudents();
  }
    

    fetchStudents()
    {
      axios.get("http://localhost:8000/api/displaystudents/students")
      .then(res=>{
        const students=res.data
       // console.log(students);
        this.setState({students});
      })
      .catch(err=>console.log(err))
    }
    
    handleDelete=(ind)=>{
      const sroll=this.state.students[ind].rollnumber;
      axios.delete(`http://localhost:8000/api/studentdelete/${sroll}`) 
      .then((res)=>{
        this.fetchStudents()
        toast.success("Student deleted successfully")
      })
      .catch((err)=>{
        console.log(err)
      })
      console.log(sroll);
    }

    handleEdit=(ind)=>{
     // const sroll=this.state.students[ind].rollnumber;
      this.setState(state=>({
        showEditStud:!state.showEditStud,
        edistud:this.state.students[ind]
        //editroll:sroll
      }))
      //()=>(console.log(this.state.editstud))
    }

    closeModal = (modal)=>{
      switch(modal){
        case "bulkstudents":{
            this.setState({showUploadStudents:!this.state.showUploadStudents})
            break;
        }
      }
    }

    render()
    {
      return (
        <Box sx={{color:"white"}}>
         <Typography variant='h5' sx={{color:"white",textAlign:'center'}}>View Students</Typography>
        <Button variant="contained" sx={{mb:3}}> <Link to="/admin/CreateStudent" style={{ textDecoration: 'none', color: 'white' }}>+Add Student</Link></Button>  
        <Button variant="contained" sx={{mb:3,textDecoration: 'none', color: 'white', ml:10}} onClick={()=>this.setState({showUploadStudents:true})}> +Add Bulk Students</Button>
        <UploadStudents showUploadStudents={this.state.showUploadStudents} fetchStudents={()=>this.fetchStudents()} closeModal={()=>this.closeModal("bulkstudents")} />
       { this.state.showEditStud&& <EditStudent showEdit={this.state.showEditStud} stud={this.state.edistud}/>}
            <table cellSpacing={10} >
                <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>UserName</th>
                    <th>Branch</th>
                    <th>Stream</th>
                    <th>CGPA</th>
                    <th colSpan={2} style={{paddingLeft:'60px'}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.students.map((s,ind)=>
                        <tr key={s.rollnumber}>
                            <td style={{textAlign:'center',padding:'30px'}}>{s.rollnumber}</td>
                            <td style={{textAlign:'center',padding:'30px'}}>{s.username}</td>
                            <td style={{textAlign:'center',padding:'30px'}}>{s.branch}</td>
                            <td style={{textAlign:'center',padding:'30px'}}>{s.stream}</td>
                            <td style={{textAlign:'center',padding:'30px'}}>{s.cgpa}</td>
                            <td style={{paddingLeft:'100px'}} ><Button  variant="contained" sx={{mb:3}} onClick={()=>this.handleEdit(ind)}>Edit</Button></td>
                            <td ><Button  variant="contained" sx={{mb:3}} onClick={()=>this.handleDelete(ind)}>Delete</Button></td>
                        </tr>)}
                </tbody>
                <tfoot>
    
                </tfoot>
    
    </table>
    </Box>
      )
    }
  
}

export default ViewStudents