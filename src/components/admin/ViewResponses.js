import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Typography } from '@mui/material';

export default function ViewResponses(props) {
  const [jobid, setJobId] = useState();
  const [studResp, setStudResp] = useState([]);
  const [resCnt, setResCnt] = useState();

  useEffect(() => {
    setJobId(props.jbid);
    axios.get(`http://localhost:8000/api/appliedstudentscount/${props.jbid}`)
      .then((res) => {
        setResCnt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios.get(`http://localhost:8000/api/appliedstudents/${props.jbid}`)
      .then((res)=>{
        const stud = res.data;
        console.log(stud);
        setStudResp(stud);
         
    })
      .catch((err)=>{console.log(err)});
    
  }, [jobid]);
  useEffect(()=>{
    studResp.map((st)=>{
        console.log(st);
    }) 
  },[studResp]);
 
  if (!props.showResp) {
    return null; // If props.showResp is false, don't render anything
  }

  return (
    <Typography sx={{ mb:80, color: '#b2dfdb' }}>
      <Typography variant='h5' sx={{ mt:2,mb:1, color: '#b2dfdb' }}>View Response for jobid:{jobid}</Typography>
      <Typography sx={{ mt: 4, mb:4,color: '#b2dfdb' }}>No.of students responded:    {resCnt}</Typography>
    <table style={{fontSize:'20px'}}>
        <tbody>
            <th style={{color:'#b2dfdb'}}>Roll Numbers</th>
        {
            studResp.map((st)=>(
                <tr key={st}>
                    <td style={{padding:'10px'}}>{st}</td>
                </tr>
            ))
        }
        </tbody>
      </table>
    </Typography>
  );
}
