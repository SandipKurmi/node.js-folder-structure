"use strict";

var _UserService = _interopRequireDefault(require("./UserService"));
var _CategoryService = _interopRequireDefault(require("./CategoryService"));
var _ProductService = _interopRequireDefault(require("./ProductService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
module.exports = {
  UserService: _UserService["default"],
  CategoryService: _CategoryService["default"],
  ProductService: _ProductService["default"]
};