"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _UserController = _interopRequireDefault(require("../controllers/UserController"));
var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(router) {
  router.post("/api/auth/signUp", _UserController["default"].SignUp);
  router.post("/api/auth/signIn", _UserController["default"].SignIn);
  router.get("/api/user", _UserController["default"].getAll);
  router.get("/api/user/:id", _UserController["default"].get);
  router.put("/api/user/:id", _auth["default"], _UserController["default"].update);
  router["delete"]("/api/user/:id", _auth["default"], _UserController["default"]["delete"]);
};
exports["default"] = _default;