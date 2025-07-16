module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "../preset.js",
    "storybook/internal/docs-tools",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  staticDirs: ["../public"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
