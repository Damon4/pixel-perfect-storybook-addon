"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleOverlayTool = void 0;
var _react = _interopRequireWildcard(require("react"));
var _managerApi = require("storybook/manager-api");
var _components = require("storybook/internal/components");
var _icons = require("@storybook/icons");
var _constants = require("./constants");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ToggleOverlayTool = exports.ToggleOverlayTool = function ToggleOverlayTool() {
  var _useGlobals = (0, _managerApi.useGlobals)(),
    _useGlobals2 = _slicedToArray(_useGlobals, 2),
    pixelPerfect = _useGlobals2[0].pixelPerfect,
    updateGlobals = _useGlobals2[1];
  var toggleOverlay = (0, _react.useCallback)(function () {
    return updateGlobals({
      pixelPerfect: {
        active: !(pixelPerfect !== null && pixelPerfect !== void 0 && pixelPerfect.active)
      }
    });
  }, [pixelPerfect === null || pixelPerfect === void 0 ? void 0 : pixelPerfect.active]);
  return /*#__PURE__*/_react["default"].createElement(_components.IconButton, {
    key: _constants.TOGGLE_OVERLAY_TOOL_ID,
    active: pixelPerfect === null || pixelPerfect === void 0 ? void 0 : pixelPerfect.active,
    title: "Toggle the component overlaying image",
    onClick: toggleOverlay
  }, pixelPerfect !== null && pixelPerfect !== void 0 && pixelPerfect.active ? /*#__PURE__*/_react["default"].createElement(_icons.EyeIcon, null) : /*#__PURE__*/_react["default"].createElement(_icons.EyeCloseIcon, null));
};