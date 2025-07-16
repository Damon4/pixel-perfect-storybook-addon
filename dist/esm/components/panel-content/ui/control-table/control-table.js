function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from "react";
import { styled, themes } from "storybook/theming";

// Interfaces

// Styles
var Table = styled.table({
  width: "100%",
  borderCollapse: "collapse"
});
var Row = styled.tr({
  padding: 0,
  borderBottom: "1px solid ".concat(themes.normal.appBorderColor)
});
var commonCellStyles = function commonCellStyles(_ref) {
  var side = _ref.side;
  return {
    width: side === "left" ? "25%" : "75%",
    padding: side === "left" ? "10px 15px 10px 30px" : side === "center" ? "10px 15px" : "10px 30px 10px 15px"
  };
};
var HeadCell = styled.th(function (_ref2) {
  var side = _ref2.side;
  return _objectSpread(_objectSpread({}, commonCellStyles({
    side: side
  })), {}, {
    fontWeight: 700,
    textAlign: "left",
    color: themes.normal.textMutedColor
  });
});
var BodyCell = styled.td(function (_ref3) {
  var side = _ref3.side;
  return _objectSpread(_objectSpread({}, commonCellStyles({
    side: side
  })), {}, {
    fontWeight: side === "left" ? 700 : 400
  });
});

// Table
var ControlTable = function ControlTable(props) {
  return /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(HeadCell, {
    side: "left"
  }, "Name"), /*#__PURE__*/React.createElement(HeadCell, {
    side: "center"
  }, "Control"), /*#__PURE__*/React.createElement(HeadCell, {
    side: "right"
  }, props.headReset))), /*#__PURE__*/React.createElement("tbody", null, props.rows.map(function (row) {
    return /*#__PURE__*/React.createElement(Row, {
      key: row.name
    }, /*#__PURE__*/React.createElement(BodyCell, {
      side: "left"
    }, row.name), /*#__PURE__*/React.createElement(BodyCell, {
      side: "center"
    }, row.control), /*#__PURE__*/React.createElement(BodyCell, {
      side: "right"
    }, row.reset));
  })));
};
export default ControlTable;