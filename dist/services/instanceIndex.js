"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = exports.insproductService = exports.inscategoryService = void 0;
var _index = require("./index");
var _models = require("../models");
var userService = new _index.UserService(new _models.User().getInstance());
exports.userService = userService;
var inscategoryService = new _index.CategoryService(new _models.Category().getInstance());
exports.inscategoryService = inscategoryService;
var insproductService = new _index.ProductService(new _models.Product().getInstance());
exports.insproductService = insproductService;