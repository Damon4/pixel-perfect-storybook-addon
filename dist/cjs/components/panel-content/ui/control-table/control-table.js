"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _theming = require("storybook/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Interfaces

// Styles
var Table = _theming.styled.table({
  width: "100%",
  borderCollapse: "collapse"
});
var Row = _theming.styled.tr({
  padding: 0,
  borderBottom: "1px solid ".concat(_theming.themes.normal.appBorderColor)
});
var commonCellStyles = function commonCellStyles(_ref) {
  var side = _ref.side;
  return {
    width: side === "left" ? "25%" : "75%",
    padding: side === "left" ? "10px 15px 10px 30px" : side === "center" ? "10px 15px" : "10px 30px 10px 15px"
  };
};
var HeadCell = _theming.styled.th(function (_ref2) {
  var side = _ref2.side;
  return _objectSpread(_objectSpread({}, commonCellStyles({
    side: side
  })), {}, {
    fontWeight: 700,
    textAlign: "left",
    color: _theming.themes.normal.textMutedColor
  });
});
var BodyCell = _theming.styled.td(function (_ref3) {
  var side = _ref3.side;
  return _objectSpread(_objectSpread({}, commonCellStyles({
    side: side
  })), {}, {
    fontWeight: side === "left" ? 700 : 400
  });
});

// Table
var ControlTable = function ControlTable(props) {
  return /*#__PURE__*/_react["default"].createElement(Table, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement(Row, null, /*#__PURE__*/_react["default"].createElement(HeadCell, {
    side: "left"
  }, "Name"), /*#__PURE__*/_react["default"].createElement(HeadCell, {
    side: "center"
  }, "Control"), /*#__PURE__*/_react["default"].createElement(HeadCell, {
    side: "right"
  }, props.headReset))), /*#__PURE__*/_react["default"].createElement("tbody", null, props.rows.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement(Row, {
      key: row.name
    }, /*#__PURE__*/_react["default"].createElement(BodyCell, {
      side: "left"
    }, row.name), /*#__PURE__*/_react["default"].createElement(BodyCell, {
      side: "center"
    }, row.control), /*#__PURE__*/_react["default"].createElement(BodyCell, {
      side: "right"
    }, row.reset));
  })));
};
var _default = exports["default"] = ControlTable;