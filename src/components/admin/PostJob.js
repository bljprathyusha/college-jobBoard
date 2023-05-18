
import { Select, Typography,MenuItem } from '@mui/material';
import {Box,Button,TextField} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import { Component } from 'react';
import axios from 'axios';

class PostJob extends Component{
    //const[jobdetails,setJobDetails]=useState()
    constructor()
    {
        super()
        this.state={
                    
               jobid:'',
               jobrole:'',
               company:'',
               description:'',
               salary:'',
               enddate:'',
           
            }
        
    }
        
    submitJob=(event)=>{
        event.preventDefault();
        //  const job=this.state.job;
         console.log(this.state)
        // const {jobid,jobrole,company,description,salary,enddate}=this.state;
        const formData=new FormData();
        // formData.append('jobid',this.state.jobid)
        // formData.append('jobrole',jobrole)
        // formData.append('company',company)
        // formData.append('description',description)
        // formData.append('salary',salary)
        // formData.append('enddate',enddate);
        // console.log(formData);
        axios(
            {method:"post",
            url
            :"http://localhost:8000/api/jobs",
            data:this.state,
        hedaers:{"Content-Type":"multipart/form-data"}})
        .then((res)=>{
            // alert("Posted successfully")
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        })
        ///push the below  states to db
        // console.log({jobid,jobrole,company,jobDescription,salary});

        
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value });
        console.log(this.state)
    }
   
    render()
    {
        const {jobid,jobrole,company,description,salary,enddate}=this.state;
        return (
          <>
          
          <Box onSubmit={this.submitJob} component="form" className='form_style border-style'sx={{align:"center",m:'2',display:"flex",flexDirection:"column",alignItems:"center"}}> 
            {/* if component given as form then only submitJob is executing */}
            <Typography variant='h4' sx={{mt:4,color:"white"}}>PostJob    </Typography>
                              <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                                  <WorkIcon/>
                              </Avatar>
      
                              <TextField  sx={{width:350,mb:3,  "& input": {color: 'white'}}} name="jobid" placeholder="JobId" value={jobid} onChange={this.handleChange} />
                              <TextField sx={{width:350,mb:3,"& input": {color: 'white'}}} name="jobrole" placeholder="JobRole"  value={jobrole} onChange={this.handleChange}/>
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="company" placeholder="company" value={company} onChange={this.handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}}  name="description" placeholder="jobDescription"  value={description} onChange={this.handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="enddate" placeholder="enddate"  value={enddate} onChange={this.handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="salary" placeholder="salary" value={salary} onChange={this.handleChange} />
                             
                              <Button type="submit"  variant="contained" sx={{mb:3}}>PostJob</Button>
                      
                      
          </Box>
      
          </>
        )
    }

}
export default PostJob