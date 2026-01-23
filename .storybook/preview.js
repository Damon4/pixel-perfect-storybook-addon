export const parameters = {
  viewport: {
    options: {
      desktop: {
        name: "Desktop",
        type: "desktop",
        styles: {
          width: "1366px",
          height: "655px",
        },
      },
    }
  },
  chromatic: {
    disableSnapshot: true,
  },
};
export const tags = ["autodocs"];

export const globalTypes = {
  pixelPerfect: {
    name: "Pixel Perfect",
    description: "Enable pixel perfect overlay",
    defaultValue: false,
  },
};

export const initialGlobals = {
  viewport: {
    value: "desktop",
    isRotated: false
  }
};
