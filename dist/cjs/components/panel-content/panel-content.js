"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _managerApi = require("storybook/manager-api");
var _theming = require("storybook/theming");
var _controlTable = _interopRequireDefault(require("./ui/control-table/control-table"));
var _resetButton = require("./ui/reset-button/reset-button");
var _constants = require("../../constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PanelContent = function PanelContent() {
  var _ref, _currentDynamicOverla, _parameter$overlay, _ref2, _currentDynamicOverla2, _parameter$overlay2;
  var parameter = (0, _managerApi.useParameter)(_constants.PARAM_KEY);
  var _useStorybookState = (0, _managerApi.useStorybookState)(),
    storyId = _useStorybookState.storyId;
  var emit = (0, _managerApi.useChannel)({});
  var _useAddonState = (0, _managerApi.useAddonState)(_constants.DYNAMIC_OVERLAYS_OPTIONS_STATE, {}),
    _useAddonState2 = _slicedToArray(_useAddonState, 2),
    dynamicOverlaysOptions = _useAddonState2[0],
    setDynamicOverlaysOptions = _useAddonState2[1];
  var currentDynamicOverlayOptions = (0, _react.useMemo)(function () {
    var _dynamicOverlaysOptio;
    return (_dynamicOverlaysOptio = dynamicOverlaysOptions[storyId]) !== null && _dynamicOverlaysOptio !== void 0 ? _dynamicOverlaysOptio : {};
  }, [dynamicOverlaysOptions, storyId]);
  (0, _react.useEffect)(function () {
    emit(_constants.EVENTS.DYNAMIC_OVERLAY_OPTIONS_CHANGED, currentDynamicOverlayOptions);
  }, [currentDynamicOverlayOptions]);
  var updateOverlayOptions = (0, _react.useCallback)(function (options) {
    setDynamicOverlaysOptions(Object.assign({}, dynamicOverlaysOptions, _defineProperty({}, storyId, _objectSpread(_objectSpread({}, currentDynamicOverlayOptions), options))));
  }, [dynamicOverlaysOptions, setDynamicOverlaysOptions, storyId, currentDynamicOverlayOptions]);
  var isDifferentFromDefault = (0, _react.useCallback)(function (option) {
    if (option === "all") {
      return Object.keys(currentDynamicOverlayOptions).some(function (optionName) {
        return isDifferentFromDefault(optionName);
      });
    } else {
      if (!("".concat(option) in currentDynamicOverlayOptions)) {
        return false;
      } else if (parameter && parameter.overlay[option]) {
        return currentDynamicOverlayOptions[option] !== parameter.overlay[option];
      } else {
        return currentDynamicOverlayOptions[option] !== _constants.DEFAULT_DYNAMIC_OVERLAY_OPTIONS[option];
      }
    }
  }, [currentDynamicOverlayOptions, parameter]);
  var resetOverlayOptions = (0, _react.useCallback)(function (option) {
    var replacement;
    if (option === "all") {
      replacement = {};
    } else {
      replacement = Object.assign({}, currentDynamicOverlayOptions);
      delete replacement[option];
    }
    setDynamicOverlaysOptions(Object.assign({}, dynamicOverlaysOptions, _defineProperty({}, storyId, replacement)));
  }, [dynamicOverlaysOptions, setDynamicOverlaysOptions, storyId, currentDynamicOverlayOptions]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_controlTable["default"], {
    headReset: /*#__PURE__*/_react["default"].createElement(_resetButton.ResetButton, {
      title: "Reset all options",
      canReset: isDifferentFromDefault("all"),
      onClick: function onClick() {
        return resetOverlayOptions("all");
      }
    }),
    rows: [{
      name: "Opacity",
      control: /*#__PURE__*/_react["default"].createElement(_material.Slider, {
        value: (_ref = (_currentDynamicOverla = currentDynamicOverlayOptions === null || currentDynamicOverlayOptions === void 0 ? void 0 : currentDynamicOverlayOptions.opacity) !== null && _currentDynamicOverla !== void 0 ? _currentDynamicOverla : parameter === null || parameter === void 0 || (_parameter$overlay = parameter.overlay) === null || _parameter$overlay === void 0 ? void 0 : _parameter$overlay.opacity) !== null && _ref !== void 0 ? _ref : _constants.DEFAULT_DYNAMIC_OVERLAY_OPTIONS.opacity,
        min: 0,
        max: 1,
        step: 0.05,
        onChange: function onChange(_, value) {
          return updateOverlayOptions({
            opacity: value
          });
        },
        "aria-label": "Opacity",
        valueLabelDisplay: "auto",
        sx: {
          color: _theming.themes.normal.colorSecondary
        }
      }),
      reset: /*#__PURE__*/_react["default"].createElement(_resetButton.ResetButton, {
        title: "Reset opacity",
        canReset: isDifferentFromDefault("opacity"),
        onClick: function onClick() {
          return resetOverlayOptions("opacity");
        }
      })
    }, {
      name: "Enable color inversion",
      control: /*#__PURE__*/_react["default"].createElement(_material.Checkbox, {
        checked: (_ref2 = (_currentDynamicOverla2 = currentDynamicOverlayOptions.colorInversion) !== null && _currentDynamicOverla2 !== void 0 ? _currentDynamicOverla2 : parameter === null || parameter === void 0 || (_parameter$overlay2 = parameter.overlay) === null || _parameter$overlay2 === void 0 ? void 0 : _parameter$overlay2.colorInversion) !== null && _ref2 !== void 0 ? _ref2 : _constants.DEFAULT_DYNAMIC_OVERLAY_OPTIONS.colorInversion,
        onChange: function onChange(_, value) {
          return updateOverlayOptions({
            colorInversion: value
          });
        },
        "aria-label": "Toggle color inversion",
        sx: {
          color: _theming.themes.normal.colorSecondary
        }
      }),
      reset: /*#__PURE__*/_react["default"].createElement(_resetButton.ResetButton, {
        title: "Reset color inversion",
        canReset: isDifferentFromDefault("colorInversion"),
        onClick: function onClick() {
          return resetOverlayOptions("colorInversion");
        }
      })
    }]
  }));
};
var _default = exports["default"] = PanelContent;