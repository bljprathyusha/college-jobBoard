import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

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
        const response = await axios.post('http://localhost:8000/api/registerStudts/xltodb', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then((res)=>{
                props.fetchJobs()
            toast.success("Registered all students successfully")});
      // Handle success response if needed
    } catch (error) {
      console.error('Upload error:', error);
      // Handle error if needed
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadStudents;
