"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userRoute = _interopRequireDefault(require("./userRoute"));
var _categoryRoute = _interopRequireDefault(require("./categoryRoute"));
var _productRoute = _interopRequireDefault(require("./productRoute"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
(0, _userRoute["default"])(router);
(0, _categoryRoute["default"])(router);
(0, _productRoute["default"])(router);
var _default = router;
exports["default"] = _default;