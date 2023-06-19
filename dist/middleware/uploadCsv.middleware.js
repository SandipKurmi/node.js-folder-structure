"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Set up multer storage to specify destination and filename for uploaded files
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'images');
  },
  filename: function filename(req, file, cb) {
    console.log('file in multer', file);
    cb(null, Date.now() + '_' + file.originalname);
  }
});

// Create multer upload object with storage options
var upload = (0, _multer["default"])({
  storage: storage
});
var singleCsvUpload = upload.single('csv');
var _default = singleCsvUpload;
exports["default"] = _default;