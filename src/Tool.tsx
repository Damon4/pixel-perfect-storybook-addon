import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ pixelPerfect }, updateGlobals] = useGlobals();

  const toggleOverlay = useCallback(
    () =>
      updateGlobals({
        pixelPerfect: {
          active: !pixelPerfect?.active
        }
      }),
    [pixelPerfect?.active]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={pixelPerfect?.active}
      title="Toggle the component overlaying image"
      onClick={toggleOverlay}
    >
      <Icons icon={pixelPerfect?.active ? 'eye' : 'eyeclose' } />
    </IconButton>
  );
};
