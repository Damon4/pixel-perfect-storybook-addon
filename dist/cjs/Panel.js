"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("storybook/internal/components");
var _panelContent = _interopRequireDefault(require("./components/panel-content/panel-content"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Panel = exports.Panel = function Panel(props) {
  return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, props, /*#__PURE__*/_react["default"].createElement(_panelContent["default"], null));
};