import React, { Component } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from 'axios';
class AppliedJobs extends Component{
    constructor(props)
    {
        super(props)
        this.state={
                jobs:[],
                
        }
    }

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
    handleApply=(id)=>{
       // setIsApply(true); and write disabled={isApply} in Button
        this.setState((prev)=>{
            const updatedjobs=prev.jobs.map((job)=>{
                if(job.jobid==id)
                    return {...job,disabled:true};
                return job;
            })
            return {jobs:updatedjobs};
        })
       
    }
    // handleReject=(e,i)=>{

    // }
    render()
    {

        return(
            <>
            <Typography variant="h4" sx={{color:"white",mb:6}}>Jobs for you</Typography>
            <Typography sx={{color:"white"}}>
            <table cellSpacing={10}>
                <thead>
                <tr>
                    <th>Job Id</th>
                    <th>Job Role</th>
                    <th>Job Description</th>
                    <th>Salary</th>
                    <th>End Date</th>
                    <th colspan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
              
               
                 
                        {this.state.jobs.map((j,i)=>
                        <tr key ={j.jobid}>
                        <td >{j.jobid}</td>
                        <td >{j.jobrole}</td>
                        <td >{j.description}</td>
                        <td>{j.salary}</td>
                        <td >{j.enddate}</td>
                        <td><Button variant="contained" sx={{p:"1"}} onClick={()=>this.handleApply(j.jobid)} disabled={this.state.jobs.disabled}>Apply</Button></td>
                        {/* <td><Button variant="contained" sx={{p:"1"}}onClick={handleReject(i)}>Reject</Button></td> */}
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
export default AppliedJobs