const mongoose = require('mongoose');
const xlsx = require('xlsx');
var studentdb=require('../model/studentmodel'); // Replace './models/student' with the path to your student model file

// Read data from Excel sheet and import into MongoDB
function importData(req, res) {
  const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  studentdb.insertMany(data)
    .then((result) =>{
      console.log(data,result)
       res.send(result)})
    .catch((err) => {
      res.status(500).send({
        message: "Data not in proper format"
      })
      console.log(err);
    })

}
  
  // Call the importData function to start the import process
module.exports = importData;