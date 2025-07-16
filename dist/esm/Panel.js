import React from "react";
import { AddonPanel } from "storybook/internal/components";
import PanelContent from "./components/panel-content/panel-content";
export var Panel = function Panel(props) {
  return /*#__PURE__*/React.createElement(AddonPanel, props, /*#__PURE__*/React.createElement(PanelContent, null));
};