// middleware/upload.js

const multer = require('multer');

// Multer memory storage configuration
const storage = multer.memoryStorage();

// File upload middleware
const upload = multer({
  storage,
}).single('file'); // 'file' is the key from FormData

module.exports = upload;