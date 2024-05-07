import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { SettingsBackupRestore } from '@mui/icons-material';
import { themes } from "@storybook/theming";
export var ResetButton = function ResetButton(props) {
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: props.title
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(SettingsBackupRestore, {
    sx: {
      color: props.canReset ? themes.normal.colorSecondary : themes.normal.base
    }
  })));
};