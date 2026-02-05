const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
// Ensure the './uploads' directory exists in your project
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Corrected destination path to be relative to project root
    cb(null, './uploads'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Corrected route definition
router.post('/', upload.single('image'), (req, res, next) => {
  try {
    // A single file is available in req.file
    if (req.file) {
      res.json({ 
        message: 'Uploaded Successfully!', 
        filePath: req.file.path 
      });
    } else {
      res.status(400).json({ message: 'No file uploaded.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
