"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _theming = require("storybook/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ResetButton = exports.ResetButton = function ResetButton(props) {
  return /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: props.title
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: props.onClick
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.SettingsBackupRestore, {
    sx: {
      color: props.canReset ? _theming.themes.normal.colorSecondary : _theming.themes.normal.base
    }
  })));
};