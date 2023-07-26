
import { Select, Typography,MenuItem } from '@mui/material';
import {Box,Button,TextField} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class EditJob extends Component{
    //const[jobdetails,setJobDetails]=useState()
    constructor(props)
    {
        super(props)
        this.state={
                    
                jobid:'',
                 jobrole:'',
                 company:'',
                 description:'',
                 salary:'',
                 enddate:'',       
            
           
            }
        
    }
    componentDidMount()
    {
       this.setState({jobid:this.props.jb.jobid,jobrole:this.props.jb.jobrole,company:this.props.jb.company,description:this.props.jb.description,salary:this.props.jb.salary,enddate:this.props.jb.enddate})
        console.log("Props",this.props.jb.jobid+" "+this.state.jobid)
    }
        
    submitJob=(event)=>{
        event.preventDefault();
        console.log(this.state.jobid)
       const jobid=this.state.jobid
        axios.put(`http://localhost:8000/api/jobupdate/${jobid}`,this.state)   //api/jobupdate/:jobid
            .then((res)=>{
                console.log(res)
                alert('Edited Job')
            })
            .catch((err)=>{
                console.log(err)
            })
        
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
            <Link to="/admin/ViewPostedJobs"><Typography variant='h7' sx={{ml:1,mt:4,color:"white"}}>&lt;&lt;GoBack</Typography></Link>
            <Typography variant='h4' sx={{mt:4,color:"white"}}>EditJob</Typography>
                              <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                                  <WorkIcon/>
                              </Avatar>
      
                              <TextField  sx={{width:350,mb:3,  "& input": {color: 'white'}}} name="jobid" placeholder="JobId (* Don't update it)" value={jobid} onChange={this.handleChange} />
                              <TextField sx={{width:350,mb:3,"& input": {color: 'white'}}} name="jobrole" placeholder="JobRole"  value={jobrole} onChange={this.handleChange}/>
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="company" placeholder="company" value={company} onChange={this.handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}}  name="description" placeholder="jobDescription"  value={description} onChange={this.handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="enddate" placeholder="enddate (dd-mm-yyyy)"  value={enddate} onChange={this.handleChange} />
                              <TextField  sx={{width:350,mb:3,"& input": {color: 'white'}}} name="salary" placeholder="salary" value={salary} onChange={this.handleChange} />
                             
                              <Button type="submit"  variant="contained" sx={{mb:3}}>EditJob</Button>
                      
                      
          </Box>
      
          </>
        )
    }

}
export default EditJob