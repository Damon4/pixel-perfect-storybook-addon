"use strict";

var _managerApi = require("storybook/manager-api");
var _constants = require("../constants");
var _ToggleOverlayTool = require("../ToggleOverlayTool");
var _Panel = require("../Panel");
// Register the addon
_managerApi.addons.register(_constants.ADDON_ID, function () {
  // Register the tool
  _managerApi.addons.add(_constants.TOGGLE_OVERLAY_TOOL_ID, {
    type: _managerApi.types.TOOL,
    title: "Toggle overlay",
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^story$/));
    },
    render: _ToggleOverlayTool.ToggleOverlayTool
  });

  // Register the panel
  _managerApi.addons.add(_constants.PANEL_ID, {
    type: _managerApi.types.PANEL,
    title: "Pixel Perfect",
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === "story";
    },
    render: _Panel.Panel
  });
});