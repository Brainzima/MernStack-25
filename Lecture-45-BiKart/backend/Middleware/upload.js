const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// ── Ensure uploads directory exists ──────────────────────────────────────────
const UPLOAD_DIR = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// ── Allowed file types ────────────────────────────────────────────────────────
const ALLOWED_TYPES = /jpeg|jpg|png|gif|webp/;

// ── Storage config ────────────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// ── File filter (images only) ─────────────────────────────────────────────────
const fileFilter = (req, file, cb) => {
  const extValid  = ALLOWED_TYPES.test(path.extname(file.originalname).toLowerCase());
  const mimeValid = ALLOWED_TYPES.test(file.mimetype);

  if (extValid && mimeValid) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, gif, webp) are allowed!'), false);
  }
};

// ── Multer instance ───────────────────────────────────────────────────────────
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB max
  },
});

// ── POST /upload  (single image) ──────────────────────────────────────────────
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded.' });
  }

  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

  return res.status(201).json({
    success:  true,
    message:  'File uploaded successfully!',
    fileName: req.file.filename,
    filePath: req.file.path,
    fileUrl,                       // ready-to-use URL for frontend
    size:     req.file.size,
  });
});

// ── POST /upload/multiple  (up to 5 images) ───────────────────────────────────
router.post('/multiple', upload.array('images', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, message: 'No files uploaded.' });
  }

  const files = req.files.map((file) => ({
    fileName: file.filename,
    filePath: file.path,
    fileUrl:  `${req.protocol}://${req.get('host')}/uploads/${file.filename}`,
    size:     file.size,
  }));

  return res.status(201).json({
    success: true,
    message: `${files.length} file(s) uploaded successfully!`,
    files,
  });
});

// ── Multer error handler (must be AFTER routes, BEFORE global handler) ────────
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // e.g. LIMIT_FILE_SIZE, LIMIT_FILE_COUNT …
    return res.status(400).json({ success: false, message: `Multer error: ${err.message}` });
  }
  if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
});

module.exports = router;

