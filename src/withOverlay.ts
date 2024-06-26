import { useChannel, useEffect, useState, makeDecorator } from "@storybook/preview-api";


import { DEFAULT_DYNAMIC_OVERLAY_OPTIONS, EVENTS } from "./constants";
import { DynamicOverlayOptions } from "./types";
import { renderOverlay, removeOverlay } from './utils/overlay';

export const withOverlay = makeDecorator(
  {
    name: 'withOverlay',
    parameterName: 'pixelPerfect',
    skipIfNoParametersOrOptions: false,
    wrapper: (StoryFn, context) => {
  const global = context.globals.pixelPerfect;
  const parameter = context.parameters.pixelPerfect;
  const [
    currentDynamicOverlayOptions,
    setCurrentDynamicOverlayOptions
  ] = useState({});

  useChannel({
    [EVENTS.DYNAMIC_OVERLAY_OPTIONS_CHANGED]: (dynamicOverlayOptions: DynamicOverlayOptions) => {
      setCurrentDynamicOverlayOptions(dynamicOverlayOptions);
    },
  });

  useEffect(() => {
    if (global?.active && parameter) {
      renderOverlay({
        ...DEFAULT_DYNAMIC_OVERLAY_OPTIONS,
        ...parameter.overlay,
        ...currentDynamicOverlayOptions,
      });
    } else {
      removeOverlay();
    }
  }, [global?.active, parameter, currentDynamicOverlayOptions]);

  useEffect(() => {
    return () => {
      removeOverlay();
    };
  }, []);

  return StoryFn(context);
}});
