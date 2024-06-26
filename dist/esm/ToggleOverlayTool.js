function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useCallback } from "react";
import { useGlobals } from "@storybook/manager-api";
import { IconButton } from "@storybook/components";
import { EyeIcon, EyeCloseIcon } from "@storybook/icons";
import { TOGGLE_OVERLAY_TOOL_ID } from "./constants";
export var ToggleOverlayTool = function ToggleOverlayTool() {
  var _useGlobals = useGlobals(),
    _useGlobals2 = _slicedToArray(_useGlobals, 2),
    pixelPerfect = _useGlobals2[0].pixelPerfect,
    updateGlobals = _useGlobals2[1];
  var toggleOverlay = useCallback(function () {
    return updateGlobals({
      pixelPerfect: {
        active: !(pixelPerfect !== null && pixelPerfect !== void 0 && pixelPerfect.active)
      }
    });
  }, [pixelPerfect === null || pixelPerfect === void 0 ? void 0 : pixelPerfect.active]);
  return /*#__PURE__*/React.createElement(IconButton, {
    key: TOGGLE_OVERLAY_TOOL_ID,
    active: pixelPerfect === null || pixelPerfect === void 0 ? void 0 : pixelPerfect.active,
    title: "Toggle the component overlaying image",
    onClick: toggleOverlay
  }, pixelPerfect !== null && pixelPerfect !== void 0 && pixelPerfect.active ? /*#__PURE__*/React.createElement(EyeIcon, null) : /*#__PURE__*/React.createElement(EyeCloseIcon, null));
};