"use strict";

var _UserModel = _interopRequireDefault(require("./UserModel"));
var _CategoryModel = _interopRequireDefault(require("./CategoryModel"));
var _ProductModel = _interopRequireDefault(require("./ProductModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
module.exports = {
  Category: _CategoryModel["default"],
  Product: _ProductModel["default"],
  User: _UserModel["default"]
};