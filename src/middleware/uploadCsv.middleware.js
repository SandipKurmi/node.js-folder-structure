import multer from 'multer';

// Set up multer storage to specify destination and filename for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    console.log('file in multer', file);
    cb(null, Date.now() + '_' + file.originalname);
  },
});

// Create multer upload object with storage options
const upload = multer({ storage: storage });

const singleCsvUpload = upload.single('csv');

export default singleCsvUpload;
