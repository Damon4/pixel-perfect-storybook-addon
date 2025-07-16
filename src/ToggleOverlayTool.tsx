import React, { useCallback } from "react";
import { useGlobals } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { EyeIcon, EyeCloseIcon } from "@storybook/icons";
import { TOGGLE_OVERLAY_TOOL_ID } from "./constants";

export const ToggleOverlayTool = () => {
  const [{ pixelPerfect }, updateGlobals] = useGlobals();

  const toggleOverlay = useCallback(
    () =>
      updateGlobals({
        pixelPerfect: {
          active: !pixelPerfect?.active,
        },
      }),
    [pixelPerfect?.active]
  );

  return (
    <IconButton
      key={TOGGLE_OVERLAY_TOOL_ID}
      active={pixelPerfect?.active}
      title="Toggle the component overlaying image"
      onClick={toggleOverlay}
    >
      {pixelPerfect?.active ? <EyeIcon /> : <EyeCloseIcon />}
    </IconButton>
  );
};
