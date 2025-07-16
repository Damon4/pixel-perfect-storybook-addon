import { withOverlay } from "../withOverlay";
import type { Renderer, ProjectAnnotations } from "storybook/internal/types";

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withOverlay],
};

export const globals = {
  pixelPerfect: false,
};

export default preview;
