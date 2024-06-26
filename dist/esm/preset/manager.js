import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, TOGGLE_OVERLAY_TOOL_ID, PANEL_ID } from "../constants";
import { ToggleOverlayTool } from "../ToggleOverlayTool";
import { Panel } from "../Panel";

// Register the addon
addons.register(ADDON_ID, function () {
  // Register the tool
  addons.add(TOGGLE_OVERLAY_TOOL_ID, {
    type: types.TOOL,
    title: "Toggle overlay",
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^story$/));
    },
    render: ToggleOverlayTool
  });

  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Pixel Perfect",
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === "story";
    },
    render: Panel
  });
});