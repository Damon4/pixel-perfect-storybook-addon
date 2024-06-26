"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _managerApi = require("@storybook/manager-api");
var _theming = require("@storybook/theming");
var _controlTable = _interopRequireDefault(require("./ui/control-table/control-table"));
var _resetButton = require("./ui/reset-button/reset-button");
var _constants = require("../../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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