"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = require("jsonwebtoken");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// eslint-disable-next-line import/no-extraneous-dependencies
// dotenv.config();
var _default = function _default(req, res, next) {
  try {
    if (req.headers.authorization) {
      var token = req.headers.authorization.replace('Bearer ', '');
      try {
        var decoded = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(403).send({
          error: true,
          statusCode: 403,
          message: 'Invalid Authorization token!'
        });
      }
    } else {
      res.status(401).send({
        error: true,
        statusCode: 401,
        message: 'Required Authorization token!'
      });
    }
  } catch (e) {
    res.status(401).send({
      error: true,
      statusCode: 401,
      message: 'Required Authorization token!'
    });
  }
}; //Grant acess to specific roles
exports["default"] = _default;
exports.authorize = function () {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }
  return function (req, res, next) {
    // console.log(req.user)
    if (!roles.includes(req.user.role)) {
      return {
        error: error.message,
        statusCode: 403
      };
    }
    next();
  };
};