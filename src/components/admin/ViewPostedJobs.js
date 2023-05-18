import { Typography } from '@mui/material'
import {Button} from '@mui/material';
import React, { Component } from 'react'
import axios from 'axios';
class ViewPostedJobs extends Component {
    constructor()
    {
        super();
        this.state={
            jobs:[]
        }
    }
    //have to fetch all jobs data from jobs schema
    componentDidMount()
    {
        this.fetchJobs();
    }
    fetchJobs()
    {
        axios.get('http://localhost:8000/api/display/jobs')
        .then((res)=>{
            const jobs=res.data.map((job)=>({
                ...job,
                disabled:false,
            }));
            console.log(jobs);
            this.setState({jobs});
        })
        .catch((err)=>{
                console.log(err);
        })
    }
    render()
    {

        return (
          <>
      
          <Typography sx={{color:"white"}}>View Posted Jobs</Typography>
          <Typography sx={{color:"white"}}>
          
              <table cellSpacing={10} >
                  <thead>
                  <tr>
                      <th>JobId</th>
                      <th>Job Role</th>
                      <th>Company</th>
                      <th>Job Description</th>
                      <th>Salary</th>
                      <th>No of Responses</th>
                      <th colSpan={2}>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                      {this.state.jobs.map(j=>
                          <tr>
                              <td>{j.jobid}</td>
                              <td>{j.jobrole}</td>
                              <td>{j.company}</td>
                              <td>{j.description}</td>
                              <td>{j.salary}</td>
                              <td>{j.responses}</td>
                              <td><Button variant="contained" sx={{p:"1"}} >Edit</Button></td>
                              <td><Button variant="contained" sx={{p:"1"}} >Delete</Button></td>
                          </tr>)}
                  </tbody>
                  <tfoot>
      
                  </tfoot>
      
      </table>
      </Typography>
          </>
        )
    }
}

export default ViewPostedJobs