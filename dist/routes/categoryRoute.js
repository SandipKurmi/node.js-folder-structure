"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _CategoryController = _interopRequireDefault(require("../controllers/CategoryController"));
var _uploadCsv = _interopRequireDefault(require("../middleware/uploadCsv.middleware"));
var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(router) {
  router.post("/api/category", _auth["default"], _CategoryController["default"].insert);
  router.post("/api/category/csvUpload", _uploadCsv["default"], _CategoryController["default"].insertCsvData);
  router.get("/api/category", _CategoryController["default"].getAll);
  router.get("/api/category/:id", _CategoryController["default"].get);
  router.get("/api/search/category", _CategoryController["default"].search);
  router.put("/api/category/:id", _auth["default"], _CategoryController["default"].update);
  router["delete"]("/api/category/:id", _auth["default"], _CategoryController["default"]["delete"]);
};
exports["default"] = _default;