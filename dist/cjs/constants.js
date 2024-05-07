"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOGGLE_OVERLAY_TOOL_ID = exports.PARAM_KEY = exports.PANEL_ID = exports.EVENTS = exports.DYNAMIC_OVERLAYS_OPTIONS_STATE = exports.DEFAULT_DYNAMIC_OVERLAY_OPTIONS = exports.ADDON_ID = void 0;
var ADDON_ID = exports.ADDON_ID = "pixel-perfect-storybook-addon";
var TOGGLE_OVERLAY_TOOL_ID = exports.TOGGLE_OVERLAY_TOOL_ID = "".concat(ADDON_ID, "/toggle-overlay-tool");
var PANEL_ID = exports.PANEL_ID = "".concat(ADDON_ID, "/panel");
var PARAM_KEY = exports.PARAM_KEY = "pixelPerfect";
var DYNAMIC_OVERLAYS_OPTIONS_STATE = exports.DYNAMIC_OVERLAYS_OPTIONS_STATE = "".concat(ADDON_ID, "/dynamic-overlays-options-state");
var DEFAULT_DYNAMIC_OVERLAY_OPTIONS = exports.DEFAULT_DYNAMIC_OVERLAY_OPTIONS = {
  opacity: 0.5,
  colorInversion: true
};
var EVENTS = exports.EVENTS = {
  DYNAMIC_OVERLAY_OPTIONS_CHANGED: "".concat(ADDON_ID, "/dynamic-overlay-options-changed")
};