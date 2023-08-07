import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [rollnum, setRollNum] = useState('');  
  useEffect(() => {
      let data = localStorage.getItem("userData");
      console.log(data);
      if(data){
          const userData=JSON.parse(data);
          console.log(userData);
          setRollNum(userData.rollnumber);     
      }
     
  }, [rollnum]);
  useEffect(()=>{
    fetchJobs();
    //console.log(rollnum);
  })

  const fetchJobs = () => {
    axios.get('http://localhost:8000/api/displayjobs/jobs')
      .then((res) => {
        const jobs = res.data.map((job) => ({
          ...job,
        }));
        setJobs(jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleApply = (jid) => {
    const id = jid;
    axios.post(`http://localhost:8000/api/jobs/${id}`, { rollnumber: '' + rollnum }) ///added job id to my applied jobs array
      .then((res) => {
        console.log(res);
        alert("Job Applied");
      })
      .catch((err) => {
        console.log(err);
      });

    axios.post(`http://localhost:8000/api/students/${rollnum}`, { jobid: '' + id }) ///add me to job's applied student array
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Typography variant="h4" sx={{ color: "white",mt:4, mb: 6 }}>Jobs for you</Typography>
      <Typography sx={{ color: "white" }} >
        <table cellSpacing={10}>
          <thead>
            <tr>
              <th style={{color:"#b3e5fc"}}>Job Id</th>
               <th style={{color:"#b3e5fc"}}>Job Role</th>
               <th style={{color:"#b3e5fc"}}>Company</th>
               <th style={{color:"#b3e5fc"}}>Job Description</th>
               <th style={{color:"#b3e5fc"}}>Salary</th>
               <th style={{color:"#b3e5fc"}}>End Date</th>
              <th style={{color:"#b3e5fc"}} colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j, i) => (
              <tr key={j.jobid}>
                <td style={{textAlign:'center',maxWidth:'100px'}}>{j.jobid}</td>
                              <td style={{textAlign:'center',maxWidth:'200px'}}>{j.jobrole}</td>
                              <td style={{textAlign:'center',padding:'10px'}}>{j.company}</td>
                              <td style={{textAlign:'left',maxWidth:'400px'}}>{j.description}</td>
                              <td style={{textAlign:'center',padding:'10px'}}>{j.salary}</td>
                              <td style={{textAlign:'center',paddingLeft:'30px',paddingRight:'40px'}}>{j.enddate}</td>
                              <td style={{textAlign:'center',padding:'10px'}}> <Button variant="contained" sx={{ p: "1" }} onClick={() => handleApply(j.jobid)} >
                    Apply
                  </Button></td>
               
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </Typography>
    </>
  );
}

export default AppliedJobs;
