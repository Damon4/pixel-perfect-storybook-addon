module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["../preset.js", "@storybook/addon-docs"],
  staticDirs: ['../public'],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};
