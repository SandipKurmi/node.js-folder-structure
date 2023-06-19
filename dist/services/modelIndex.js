"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = exports.productService = exports.categoryService = void 0;
var _index = require("./index");
var _models = require("../models");
var userService = new _index.UserService(new _models.User().getModel());
exports.userService = userService;
var categoryService = new _index.CategoryService(new _models.Category().getModel());
exports.categoryService = categoryService;
var productService = new _index.ProductService(new _models.Product().getModel());
exports.productService = productService;