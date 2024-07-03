import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Box, Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UploadStudents = (props) => {
  // State to store uploaded file
  const [uploadedFile, setUploadedFile] = useState(null);
  const handleFileChange=(e)=>{
    setUploadedFile(e.target.files[0]);
  }

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadedFile) {
        alert('Please select a File');
        return;
    }
    
    try {
        const formData = new FormData();
        formData.append('file', uploadedFile);
        
        // Replace with your API endpoint
        await axios.post('http://localhost:8000/api/registerStudts/xltodb', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then((res)=>{
              toast.success("Registered all students successfully")
              props.closeModal()
              props.fetchStudents()
          })
            .catch((err)=>toast.error(err.message));
      // Handle success response if needed
    } catch (error) {
      console.error('Upload error:', error);
      // Handle error if needed
    }
  };

  return (
    <Modal open={props.showUploadStudents}>
      <Box sx={{position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#ccd4dc",
        boxShadow: 24,
        p: 4,
        minWidth: 300,
        maxWidth: '80%',
        maxHeight: '80%',
        overflowY: 'scroll',
        scrollbarWidth:"none",
        borderRadius:4,
        align:"center",m:'2',display:"flex",flexDirection:"column",alignItems:"center"}}>
        <CloseIcon sx={{position: 'absolute',left:'22rem', fontSize:'small', color:"black"}} onClick={()=>props.closeModal()}/>
      <form onSubmit={handleUpload} style={{marginTop:"2.5rem"}}>
        <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
        <Button type="submit" variant="outlined">Upload</Button>
      </form>
      </Box>
    </Modal >
  );
};

export default UploadStudents;
