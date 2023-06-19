"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ProductController = _interopRequireDefault(require("../controllers/ProductController"));
var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(router) {
  router.post("/api/product", _auth["default"], _ProductController["default"].insert);
  router.get("/api/product", _ProductController["default"].getAllProduct);
  router.get("/api/product/:id", _ProductController["default"].get);
  router.put("/api/product/:id", _auth["default"], _ProductController["default"].update);
  router["delete"]("/api/product/:id", _auth["default"], _ProductController["default"]["delete"]);
};
exports["default"] = _default;